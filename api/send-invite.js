// Vercel Serverless Function to send emails via SendGrid
// This runs on Vercel's servers, not in the browser

export default async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { email, firstName, lastName, inviteLink } = req.body;

    if (!email || !firstName || !lastName || !inviteLink) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const FROM_EMAIL = process.env.FROM_EMAIL || 'aespinoza@savcds.org';
    const FROM_NAME = 'Hornet Athletics Portal';

    if (!SENDGRID_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        error: 'SendGrid API key not configured' 
      });
    }

    const emailData = {
      personalizations: [{
        to: [{ email: email, name: `${firstName} ${lastName}` }],
        subject: 'Invitation to Hornet Athletics Portal'
      }],
      from: { email: FROM_EMAIL, name: FROM_NAME },
      content: [{
        type: 'text/html',
        value: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #22c55e 0%, #d4af37 100%); 
                       padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { color: #000; margin: 0; font-size: 24px; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; padding: 15px 30px; background: #22c55e; 
                       color: #fff; text-decoration: none; border-radius: 8px; 
                       font-weight: bold; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🐝 Welcome to Hornet Athletics Portal</h1>
              </div>
              <div class="content">
                <p>Hi ${firstName},</p>
                <p>You've been invited to access the Hornet Athletics Portal! This is your personal dashboard to track your athletic performance and progress.</p>
                <p>Click the button below to set up your account and create your password:</p>
                <center>
                  <a href="${inviteLink}" class="button" style="display: inline-block; padding: 15px 30px; background: #22c55e; color: #fff !important; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0;">Set Up My Account</a>
                </center>
                <p>Or copy and paste this link into your browser:</p>
                <p style="background: #fff; padding: 10px; border-radius: 5px; word-break: break-all;">
                  ${inviteLink}
                </p>
                <p><strong>Important:</strong> This link is unique to you and can only be used once to set up your account.</p>
                <p>If you have any questions, please contact your coach.</p>
                <p>Best regards,<br>Hornet Athletics Team</p>
              </div>
              <div class="footer">
                <p>This is an automated message from the Hornet Athletics Portal.</p>
              </div>
            </div>
          </body>
          </html>
        `
      }]
    };

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok || response.status === 202) {
      return res.status(200).json({ 
        success: true, 
        message: `Email sent to ${email}` 
      });
    } else {
      const error = await response.text();
      console.error('SendGrid error:', error);
      return res.status(response.status).json({ 
        success: false, 
        error: 'SendGrid API error',
        details: error
      });
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
