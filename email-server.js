// Simple Node.js server to send emails via SendGrid
// This avoids CORS issues by handling requests server-side

const http = require('http');
const https = require('https');

const SENDGRID_API_KEY = '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';
const FROM_EMAIL = 'aespinoza@savcds.org';
const FROM_NAME = 'Hornet Athletics Portal';
const PORT = 3001;

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/send-invite') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const { email, firstName, lastName, inviteLink } = JSON.parse(body);

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
                      <a href="${inviteLink}" class="button">Set Up My Account</a>
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

        const postData = JSON.stringify(emailData);

        const options = {
          hostname: 'api.sendgrid.com',
          port: 443,
          path: '/v3/mail/send',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          }
        };

        const sendGridReq = https.request(options, (sendGridRes) => {
          let responseData = '';

          sendGridRes.on('data', (chunk) => {
            responseData += chunk;
          });

          sendGridRes.on('end', () => {
            if (sendGridRes.statusCode === 202 || sendGridRes.statusCode === 200) {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                success: true, 
                message: `Email sent to ${email}` 
              }));
            } else {
              console.error('SendGrid error:', responseData);
              res.writeHead(sendGridRes.statusCode, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                success: false, 
                error: 'SendGrid API error',
                details: responseData
              }));
            }
          });
        });

        sendGridReq.on('error', (error) => {
          console.error('Request error:', error);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ 
            success: false, 
            error: error.message 
          }));
        });

        sendGridReq.write(postData);
        sendGridReq.end();

      } catch (error) {
        console.error('Parse error:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          success: false, 
          error: 'Invalid request body' 
        }));
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`📧 Email server running on http://localhost:${PORT}`);
  console.log(`Ready to send invites via SendGrid!`);
});
