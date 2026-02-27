require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up the SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Change this if using Outlook, Yahoo, etc.
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// The endpoint that receives the frontend data
app.post("/api/quote", async (req, res) => {
  const quoteData = req.body;

  // 1. Validate required fields
  if (!quoteData.firstName || !quoteData.email || !quoteData.phone) {
    return res
      .status(400)
      .json({ success: false, message: "Missing Name, Email, or Phone." });
  }

  // 2. Format the email HTML template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
        .header { background-color: #1e3a8a; color: #ffffff; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
        .header p { margin: 5px 0 0; opacity: 0.8; font-size: 14px; }
        .content { padding: 30px; background-color: #ffffff; }
        .section-title { color: #1e3a8a; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #f97316; display: inline-block; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
        .info-item { margin-bottom: 15px; }
        .label { font-size: 12px; color: #666; text-transform: uppercase; font-weight: bold; display: block; }
        .value { font-size: 15px; color: #111; font-weight: 500; }
        .address-box { background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #1e3a8a; margin-bottom: 15px; }
        .details-box { background-color: #fff7ed; padding: 15px; border-radius: 6px; border: 1px dashed #f97316; margin-top: 20px; }
        .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background-color: #f97316; color: white; font-size: 12px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Amazon Van Lines</h1>
          <p>New Quote Request Received</p>
        </div>
        
        <div class="content">
          <div style="text-align: right; margin-bottom: 20px;">
            <span class="badge">${quoteData.moveType}</span>
          </div>

          <div class="section-title">Customer Information</div>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" class="info-item">
                <span class="label">Full Name</span>
                <span class="value">${quoteData.firstName} ${quoteData.lastName}</span>
              </td>
              <td width="50%" class="info-item">
                <span class="label">Email Address</span>
                <span class="value"><a href="mailto:${quoteData.email}" style="color: #1e3a8a; text-decoration: none;">${quoteData.email}</a></span>
              </td>
            </tr>
            <tr>
              <td width="50%" class="info-item">
                <span class="label">Phone Number</span>
                <span class="value"><a href="tel:${quoteData.phone}" style="color: #1e3a8a; text-decoration: none;">${quoteData.phone}</a></span>
              </td>
              <td width="50%" class="info-item">
                <span class="label">Move Date</span>
                <span class="value">${quoteData.moveDate}</span>
              </td>
            </tr>
          </table>

          <div class="section-title" style="margin-top: 20px;">Move Locations</div>
          <div class="address-box">
            <span class="label">PICKUP FROM</span>
            <span class="value">${quoteData.pickupAddress || "No street address provided"}</span><br>
            <span class="value" style="font-weight: bold;">${quoteData.pickupCity}</span>
          </div>
          <div class="address-box" style="border-left-color: #f97316;">
            <span class="label">DELIVERY TO</span>
            <span class="value">${quoteData.dropoffAddress || "No street address provided"}</span><br>
            <span class="value" style="font-weight: bold;">${quoteData.dropoffCity}</span>
          </div>

          <div class="section-title" style="margin-top: 20px;">Inventory & Details</div>
          <div class="info-item">
            <span class="label">Estimated Move Size</span>
            <span class="value">${quoteData.moveSize}</span>
          </div>
          
          ${quoteData.details ? `
          <div class="details-box">
            <span class="label">Additional Instructions</span>
            <p style="margin: 5px 0 0; font-size: 14px;">${quoteData.details}</p>
          </div>
          ` : ''}
        </div>

        <div class="footer">
          <p>This is an automated lead notification from your website.</p>
          <p>&copy; 2024 Amazon Van Lines | <a href="https://amazonvanlines.com" style="color: #64748b;">www.amazonvanlines.com</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  // 3. Send the email
  try {
    await transporter.sendMail({
      from: `"Amazon Van Lines Leads" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: quoteData.email,
      subject: `🚨 NEW LEAD: ${quoteData.moveType} - ${quoteData.firstName} ${quoteData.lastName}`,
      html: htmlContent,
      text: `New Lead: ${quoteData.firstName} ${quoteData.lastName} - ${quoteData.moveType}. Phone: ${quoteData.phone}. Email: ${quoteData.email}. Moving from ${quoteData.pickupCity} to ${quoteData.dropoffCity} on ${quoteData.moveDate}.`,
    });

    console.log("Email sent successfully!");
    res
      .status(200)
      .json({ success: true, message: "Quote sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start server
app.get("/api/test-email", async (req, res) => {
  const mockData = {
    firstName: "John",
    lastName: "Doe",
    email: "test@example.com",
    phone: "123-456-7890",
    moveType: "Local Move",
    moveSize: "2 Bedroom Apartment",
    pickupCity: "Toronto, ON",
    pickupAddress: "123 Main St",
    dropoffCity: "Vancouver, BC",
    dropoffAddress: "456 Oak Ave",
    moveDate: "2024-12-25",
    details: "I have a piano and some fragile items in the kitchen. Need extra packing supplies."
  };

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
        .header { background-color: #1e3a8a; color: #ffffff; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
        .header p { margin: 5px 0 0; opacity: 0.8; font-size: 14px; }
        .content { padding: 30px; background-color: #ffffff; }
        .section-title { color: #1e3a8a; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #f97316; display: inline-block; }
        .info-item { margin-bottom: 15px; }
        .label { font-size: 12px; color: #666; text-transform: uppercase; font-weight: bold; display: block; }
        .value { font-size: 15px; color: #111; font-weight: 500; }
        .address-box { background-color: #f8fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #1e3a8a; margin-bottom: 15px; }
        .details-box { background-color: #fff7ed; padding: 15px; border-radius: 6px; border: 1px dashed #f97316; margin-top: 20px; }
        .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background-color: #f97316; color: white; font-size: 12px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Amazon Van Lines</h1>
          <p>Email Template Test</p>
        </div>
        
        <div class="content">
          <div style="text-align: right; margin-bottom: 20px;">
            <span class="badge">${mockData.moveType}</span>
          </div>

          <div class="section-title">Customer Information</div>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" class="info-item">
                <span class="label">Full Name</span>
                <span class="value">${mockData.firstName} ${mockData.lastName}</span>
              </td>
              <td width="50%" class="info-item">
                <span class="label">Email Address</span>
                <span class="value"><a href="mailto:${mockData.email}" style="color: #1e3a8a; text-decoration: none;">${mockData.email}</a></span>
              </td>
            </tr>
            <tr>
              <td width="50%" class="info-item">
                <span class="label">Phone Number</span>
                <span class="value"><a href="tel:${mockData.phone}" style="color: #1e3a8a; text-decoration: none;">${mockData.phone}</a></span>
              </td>
              <td width="50%" class="info-item">
                <span class="label">Move Date</span>
                <span class="value">${mockData.moveDate}</span>
              </td>
            </tr>
          </table>

          <div class="section-title" style="margin-top: 20px;">Move Locations</div>
          <div class="address-box">
            <span class="label">PICKUP FROM</span>
            <span class="value">${mockData.pickupAddress}</span><br>
            <span class="value" style="font-weight: bold;">${mockData.pickupCity}</span>
          </div>
          <div class="address-box" style="border-left-color: #f97316;">
            <span class="label">DELIVERY TO</span>
            <span class="value">${mockData.dropoffAddress}</span><br>
            <span class="value" style="font-weight: bold;">${mockData.dropoffCity}</span>
          </div>

          <div class="section-title" style="margin-top: 20px;">Inventory & Details</div>
          <div class="info-item">
            <span class="label">Estimated Move Size</span>
            <span class="value">${mockData.moveSize}</span>
          </div>
          
          <div class="details-box">
            <span class="label">Additional Instructions</span>
            <p style="margin: 5px 0 0; font-size: 14px;">${mockData.details}</p>
          </div>
        </div>

        <div class="footer">
          <p>This is a test notification from your website.</p>
          <p>&copy; 2024 Amazon Van Lines | <a href="https://amazonvanlines.com" style="color: #64748b;">www.amazonvanlines.com</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Amazon Van Lines Test" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `🧪 TEST LEAD: ${mockData.moveType} - ${mockData.firstName} ${mockData.lastName}`,
      html: htmlContent,
    });
    res.status(200).json({ success: true, message: "Test email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Test email failed.", error: error.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server is running on port ${PORT}`);
});
