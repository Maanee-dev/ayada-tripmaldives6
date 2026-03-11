<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-API-Key");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON data"]);
    exit;
}

$name = $data['name'] ?? 'Guest';
$email = $data['email'] ?? '';
$resort = $data['resort'] ?? 'General Inquiry';
$phone = $data['phone'] ?? 'N/A';
$notes = $data['notes'] ?? 'N/A';
$roomType = $data['roomType'] ?? 'N/A';

// Email Configuration
$to = "hello@maldives-serenitytravels.com";
$subject = "New Inquiry: $name - $resort";
$from = "hello@maldives-serenitytravels.com";

$message = "
<html>
<head>
<title>New Inquiry Received</title>
</head>
<body style='font-family: sans-serif; padding: 20px;'>
    <h2>New Inquiry Details</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Resort:</strong> $resort</p>
    <p><strong>Villa Type:</strong> $roomType</p>
    <p><strong>Message:</strong> $notes</p>
    <hr />
    <p>Sent from TripMaldives Platform (PHP Backend)</p>
</body>
</html>
";

// Headers for HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: TripMaldives <$from>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Send Email
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode([
        "success" => true,
        "message" => "Inquiry received successfully via PHP."
    ]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email. Please check server mail configuration."]);
}
?>
