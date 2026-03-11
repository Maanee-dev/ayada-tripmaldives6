import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import compression from "compression";
import Database from "better-sqlite3";
import nodemailer from "nodemailer";
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors';
import { SECRETS } from './secrets';

dotenv.config();

const db = new Database("leads.db");

// Supabase Client for Server-side (using secrets as fallback)
const supabaseUrl = process.env.VITE_SUPABASE_URL || SECRETS.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || SECRETS.SUPABASE_SERVICE_ROLE_KEY || SECRETS.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize local database as backup
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    resort TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    check_in TEXT,
    check_out TEXT,
    adults INTEGER,
    children INTEGER,
    groups_data TEXT,
    room_type TEXT,
    meal_plan TEXT,
    items_data TEXT,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Migration: Add items_data column if it doesn't exist (for existing databases)
try {
  db.exec("ALTER TABLE leads ADD COLUMN items_data TEXT");
} catch (e) {
  // Column already exists or other error
}

let transporter: nodemailer.Transporter;

async function setupMailer() {
  const host = process.env.SMTP_HOST || SECRETS.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || SECRETS.SMTP_PORT.toString());
  const user = process.env.SMTP_USER || SECRETS.SMTP_USER;
  const pass = process.env.SMTP_PASS || SECRETS.SMTP_PASS;

  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      }
    });
    
    transporter.verify((error, success) => {
      if (error) {
        console.error("SMTP Verification Error:", error);
      } else {
        console.log(`SMTP Mailer configured and verified for ${host}:${port}`);
      }
    });
  } else {
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log("Ethereal Email account created for testing.");
    } catch (error) {
      console.error("Failed to setup mailer:", error);
    }
  }
}

setupMailer();

function getEmailHtml(data: any) {
  const appUrl = process.env.APP_URL || "http://localhost:3000";
  
  let itemsHtml = '';
  if (data.items && data.items.length > 0) {
    itemsHtml = `
      <div class="details" style="margin-top: 20px;">
        <h3 style="margin-top: 0; font-family: 'Outfit', sans-serif; font-size: 18px; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px; margin-bottom: 15px;">Selected Experiences</h3>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          ${data.items.map((item: any) => `
            <li style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #f0f0f0;">
              <span style="display: block; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #059669; font-weight: bold;">${item.category}</span>
              <span style="display: block; font-weight: 500;">${item.name}</span>
              ${item.price ? `<span style="display: block; font-size: 12px; color: #666;">${item.price}</span>` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  const isGeneralInquiry = data.resort === 'General Inquiry';
  const introText = isGeneralInquiry 
    ? `We have successfully received your general inquiry. Our travel specialists are currently reviewing your message and will get back to you <strong>within 24 hours</strong>.`
    : `We have successfully received your quote request for <strong>${data.resort || 'our luxury resorts'}</strong>. Our travel specialists are currently reviewing your details and will get back to you with a personalized itinerary and quotation <strong>within 24 hours</strong>.`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #f5f5f5;
      color: #1a1a1a;
      margin: 0;
      padding: 40px 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }
    .header {
      background-color: #1a1a1a;
      color: #ffffff;
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      font-family: 'Outfit', sans-serif;
      font-weight: 400;
      margin: 0;
      font-size: 28px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px;
      text-align: center;
    }
    .content h2 {
      font-family: 'Outfit', sans-serif;
      font-weight: 400;
      font-size: 24px;
      margin-top: 0;
      color: #1a1a1a;
    }
    .content p {
      line-height: 1.6;
      color: #4a4a4a;
      margin-bottom: 24px;
    }
    .details {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 4px;
      text-align: left;
      margin-bottom: 30px;
    }
    .details p {
      margin: 8px 0;
      font-size: 14px;
    }
    .details strong {
      color: #1a1a1a;
      display: inline-block;
      width: 120px;
    }
    .footer {
      background-color: #1a1a1a;
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
      font-size: 12px;
      opacity: 0.8;
    }
    .button {
      display: inline-block;
      background-color: #1a1a1a;
      color: #ffffff;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 4px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>TripMaldives</h1>
    </div>
    <div class="content">
      <h2>Thank You for Your Inquiry</h2>
      <p>Dear ${data.name || 'Guest'},</p>
      <p>${introText}</p>
      
      <div class="details">
        <h3 style="margin-top: 0; font-family: 'Outfit', sans-serif; font-size: 18px; border-bottom: 1px solid #e5e5e5; padding-bottom: 10px; margin-bottom: 15px;">Inquiry Details</h3>
        ${!isGeneralInquiry ? `<p><strong>Resort:</strong> ${data.resort || 'N/A'}</p>` : ''}
        ${data.checkIn ? `<p><strong>Check-in:</strong> ${data.checkIn}</p>` : ''}
        ${data.checkOut ? `<p><strong>Check-out:</strong> ${data.checkOut}</p>` : ''}
        ${data.groups && data.groups.length > 0 ? `
          <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #e5e5e5;">
            <p style="font-weight: bold; margin-bottom: 5px;">Group Breakdown:</p>
            ${data.groups.map((g: any, i: number) => `
              <p style="margin: 4px 0; font-size: 13px;">Group ${i + 1}: ${g.adults} Adults, ${g.children} Children</p>
            `).join('')}
          </div>
        ` : (data.adults || data.children ? `<p><strong>Guests:</strong> ${data.adults || 0} Adults, ${data.children || 0} Children</p>` : '')}
        ${data.roomType ? `<p><strong>${isGeneralInquiry ? 'Subject' : 'Villa Type'}:</strong> ${data.roomType}</p>` : ''}
        ${data.mealPlan ? `<p><strong>Meal Plan:</strong> ${data.mealPlan.replace(/_/g, ' ')}</p>` : ''}
        ${data.notes ? `<p><strong>Message:</strong> ${data.notes}</p>` : ''}
      </div>

      ${itemsHtml}

      <p>If you have any immediate questions, please don't hesitate to reply directly to this email.</p>
      
      <a href="${appUrl}" class="button">Return to Website</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} TripMaldives. All rights reserved.</p>
      <p>Luxury Resort Bookings & Private Quotations</p>
    </div>
  </div>
</body>
</html>
  `;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors({
    origin: [
      "https://www.ayada.tripmaldives.co",
      "https://ayada.tripmaldives.co",
      "http://localhost:3000",
      "http://localhost:5173",
      /\.run\.app$/ // Allow all Cloud Run subdomains
    ],
    credentials: true
  }));

  app.use(compression());
  app.use(express.json());

  // API Routes
  app.post("/api/leads", async (req, res) => {
    // API Key Verification
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.BACKEND_API_KEY || SECRETS.BACKEND_API_KEY;

    if (apiKey !== validApiKey) {
      console.warn(`Unauthorized access attempt with key: ${apiKey}`);
      return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
    }

    const { 
      resort, name, email, phone, 
      checkIn, checkOut, adults, children, groups,
      roomType, mealPlan, notes, items 
    } = req.body;

    try {
      // Insert into Local SQLite (Backup)
      try {
        const stmt = db.prepare(`
          INSERT INTO leads (
            resort, name, email, phone, 
            check_in, check_out, adults, children, groups_data,
            room_type, meal_plan, items_data, notes
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        stmt.run(
          resort || 'Ayada Maldives', 
          name || 'Guest', 
          email || '', 
          phone || '', 
          checkIn || '', 
          checkOut || '', 
          adults || 0, 
          children || 0, 
          JSON.stringify(groups || []),
          roomType || 'General Inquiry', 
          mealPlan || 'N/A', 
          JSON.stringify(items || []), 
          notes || ''
        );
      } catch (dbError) {
        console.error("SQLite insertion error:", dbError);
        // Continue to Supabase even if SQLite fails
      }

      // Insert into Supabase
      try {
        const { error: supabaseError } = await supabase
          .from('leads')
          .insert([{
            resort: resort || 'Ayada Maldives',
            name: name || 'Guest',
            email: email || '',
            phone: phone || '',
            check_in: checkIn || '',
            check_out: checkOut || '',
            adults: adults || 0,
            children: children || 0,
            groups_data: groups || [],
            room_type: roomType || 'General Inquiry',
            meal_plan: mealPlan || 'N/A',
            items_data: items || [],
            notes: notes || ''
          }]);

        if (supabaseError) {
          console.error("Supabase insertion error:", supabaseError);
        }
      } catch (sError) {
        console.error("Supabase service error:", sError);
      }

      console.log(`New Lead for ${resort}:`, { name, email });
      
      let previewUrl = null;
      
      // Send email
      if (transporter && email) {
        try {
          const fromEmail = process.env.SMTP_FROM || '"TripMaldives" <reservations@tripmaldives.co>';
          const adminEmail = process.env.SMTP_USER || 'reservations@tripmaldives.co';

          // 1. Send confirmation to the customer
          const info = await transporter.sendMail({
            from: fromEmail,
            to: email,
            subject: `Your Quote Request - ${resort || 'TripMaldives'}`,
            html: getEmailHtml(req.body),
          });
          
          // 2. Send notification to the admin
          await transporter.sendMail({
            from: fromEmail,
            to: adminEmail,
            subject: `New Inquiry: ${name} - ${resort || 'General Inquiry'}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px;">
                <h2>New Inquiry Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Resort:</strong> ${resort}</p>
                <p><strong>Check-in:</strong> ${checkIn || 'N/A'}</p>
                <p><strong>Check-out:</strong> ${checkOut || 'N/A'}</p>
                <p><strong>Guests:</strong> ${adults || 0} Adults, ${children || 0} Children</p>
                <p><strong>Villa Type:</strong> ${roomType || 'N/A'}</p>
                <p><strong>Meal Plan:</strong> ${mealPlan || 'N/A'}</p>
                <p><strong>Message:</strong> ${notes || 'N/A'}</p>
                <hr />
                <p>Sent from TripMaldives Platform</p>
              </div>
            `
          });
          
          previewUrl = nodemailer.getTestMessageUrl(info);
          console.log("Email sent successfully.");
          if (previewUrl) console.log("Preview URL: %s", previewUrl);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
        }
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Inquiry received. A luxury travel specialist will contact you shortly.",
        previewUrl
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save inquiry" });
    }
  });

  app.get("/api/preview-email", (req, res) => {
    const mockData = {
      resort: "Ayada Maldives",
      name: "John Doe",
      email: "john@example.com",
      checkIn: "2026-12-01",
      checkOut: "2026-12-08",
      adults: 2,
      children: 0,
      roomType: "Ocean Villa with Pool",
      mealPlan: "All_Inclusive",
      notes: "We are celebrating our 10th anniversary!",
      items: [
        { id: '1', name: 'Sunset Dolphin Cruise', category: 'Excursion', price: '$150 per person' },
        { id: '2', name: 'Couples Spa Retreat', category: 'Wellness', price: '$450 per couple' }
      ]
    };
    res.send(getEmailHtml(mockData));
  });

  app.get("/api/resort/:slug", (req, res) => {
    const { slug } = req.params;
    // Mock data for Ayada Maldives
    if (slug === "ayada") {
      res.json({
        name: "Ayada Maldives",
        location: "Gaafu Dhaalu Atoll",
        tagline: "A Turkish-Inspired Tropical Paradise",
        highlights: [
          "Award-winning Turkish Spa",
          "Private infinity pools in every villa",
          "Surfing and diving excellence",
          "Pristine coral reefs"
        ],
        offers: "Exclusive 45% Off + Complimentary Seaplane Transfers",
        trustSignals: ["Voted World's Leading Water Villa Resort", "5/5 Tripadvisor Rating"]
      });
    } else {
      res.status(404).json({ error: "Resort not found" });
    }
  });

  // Sitemap Route
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.APP_URL || "https://ayada.tripmaldives.co";
    const pages = [
      { url: "/", priority: "1.0", changefreq: "daily" },
      { url: "/rooms", priority: "0.9", changefreq: "weekly" },
      { url: "/offers", priority: "0.9", changefreq: "daily" },
      { url: "/dining", priority: "0.8", changefreq: "weekly" },
      { url: "/experiences", priority: "0.8", changefreq: "weekly" },
      { url: "/all-inclusive", priority: "0.8", changefreq: "monthly" },
      { url: "/ayspa", priority: "0.8", changefreq: "monthly" },
      { url: "/weddings", priority: "0.8", changefreq: "monthly" },
      { url: "/activities/excursions", priority: "0.7", changefreq: "weekly" },
      { url: "/activities/watersports", priority: "0.7", changefreq: "weekly" },
      { url: "/activities/diving", priority: "0.7", changefreq: "weekly" },
      { url: "/activities/sports-recreation", priority: "0.7", changefreq: "weekly" },
      { url: "/activities/zuzuu-kids-club", priority: "0.7", changefreq: "weekly" },
      { url: "/activities/exotic-animals", priority: "0.7", changefreq: "weekly" },
      { url: "/contact", priority: "0.6", changefreq: "monthly" },
      { url: "/request-quote", priority: "0.6", changefreq: "monthly" },
      { url: "/terms", priority: "0.3", changefreq: "monthly" },
      { url: "/privacy", priority: "0.3", changefreq: "monthly" },
      { url: "/cancellation-policy", priority: "0.3", changefreq: "monthly" },
      { url: "/booking-conditions", priority: "0.3", changefreq: "monthly" },
      { url: "/cookie-policy", priority: "0.3", changefreq: "monthly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist"), {
      maxAge: '1y',
      etag: true
    }));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
