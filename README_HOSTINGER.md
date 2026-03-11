# 🚀 Hostinger Node.js Deployment Guide for TripMaldives

If you are seeing "Server did not return a JSON response", it means your request is hitting the **Frontend (HTML)** instead of the **Backend (Node.js)**. 

Follow this checklist to fix it:

### 1. Check the Health API
Open this link in your browser: 
`https://www.tripmaldives.co/api/health`

*   **If you see JSON code**: The server is working! The problem might be CORS or your API Key.
*   **If you see your website home page**: The Node.js server is **NOT** correctly connected to your domain.

### 2. Node.js Selector Settings (Hostinger Panel)
Go to **Advanced** -> **Node.js** in your Hostinger panel:
*   **Application URL**: Ensure it is `https://www.tripmaldives.co` (or your subdomain).
*   **Application Startup File**: Set this to `server.ts`.
*   **Application Mode**: Set to `Production`.
*   **Environment Variables**: Add `BACKEND_API_KEY` and set it to `ayada_secret_key_2024`.

### 3. The `.htaccess` Problem
If you have a file named `.htaccess` in your `public_html` folder, it might be redirecting all requests to `index.html`.
*   **Fix**: Rename it to `.htaccess_backup` to see if the API starts working.
*   **Or**: Use the `.htaccess` file I provided in the `dist` folder which excludes `/api/` from being redirected.

### 4. Build the Frontend
You **MUST** run the build command on Hostinger:
1.  Open the **Terminal** in Hostinger.
2.  Run: `npm install`
3.  Run: `npm run build`
4.  This creates the `dist` folder. Ensure your Node.js app is serving files from this folder.

### 5. Check Logs
In the Hostinger Node.js dashboard, click **Logs**. If there is an error (like "Module not found"), it will tell you exactly what is missing.

---

### 🛠️ Troubleshooting CORS
If you are using a subdomain like `ayada.tripmaldives.co`, make sure it is listed in the `cors` section of `server.ts`. I have already added the most common ones for you.
