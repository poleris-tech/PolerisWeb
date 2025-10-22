import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Poleris Digital <onboarding@resend.dev>', // You'll update this with your verified domain
      to: process.env.CONTACT_EMAIL || 'polerisllc@outlook.com', // Your email
      replyTo: email, // User's email for easy reply
      subject: `${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #1f2937;
                background-color: #f3f4f6;
                padding: 20px;
              }
              .email-wrapper {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
                padding: 40px 30px;
                text-align: center;
              }
              .logo {
                font-size: 28px;
                font-weight: 700;
                color: #ffffff;
                letter-spacing: -0.5px;
                margin-bottom: 8px;
              }
              .tagline {
                color: rgba(255, 255, 255, 0.9);
                font-size: 14px;
                font-weight: 400;
              }
              .email-body {
                padding: 40px 30px;
                background-color: #ffffff;
              }
              .greeting {
                font-size: 16px;
                color: #6b7280;
                margin-bottom: 20px;
              }
              .message-content {
                background-color: #f9fafb;
                border-left: 4px solid #2563eb;
                padding: 20px;
                margin: 25px 0;
                border-radius: 4px;
                font-size: 15px;
                line-height: 1.7;
                color: #374151;
              }
              .sender-info {
                margin-top: 30px;
                padding-top: 25px;
                border-top: 2px solid #e5e7eb;
              }
              .info-title {
                font-size: 13px;
                font-weight: 600;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 15px;
              }
              .info-row {
                display: flex;
                align-items: center;
                margin-bottom: 12px;
              }
              .info-label {
                font-weight: 600;
                color: #001f3d;
                min-width: 80px;
                font-size: 14px;
              }
              .info-value {
                color: #4b5563;
                font-size: 14px;
              }
              .info-value a {
                color: #2563eb;
                text-decoration: none;
                transition: color 0.2s;
              }
              .info-value a:hover {
                color: #1d4ed8;
                text-decoration: underline;
              }
              .cta-section {
                margin-top: 30px;
                padding: 20px;
                background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
                border-radius: 8px;
                text-align: center;
              }
              .cta-button {
                display: inline-block;
                padding: 12px 30px;
                background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
                color: #ffffff;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                transition: transform 0.2s;
              }
              .cta-button:hover {
                transform: translateY(-2px);
              }
              .email-footer {
                background-color: #001f3d;
                padding: 30px;
                text-align: center;
              }
              .footer-text {
                color: rgba(255, 255, 255, 0.8);
                font-size: 13px;
                line-height: 1.6;
                margin-bottom: 15px;
              }
              .footer-links {
                margin-top: 15px;
              }
              .footer-link {
                color: #06b6d4;
                text-decoration: none;
                margin: 0 10px;
                font-size: 13px;
              }
              .footer-link:hover {
                text-decoration: underline;
              }
              .divider {
                height: 1px;
                background-color: rgba(255, 255, 255, 0.2);
                margin: 20px 0;
              }
              .copyright {
                color: rgba(255, 255, 255, 0.6);
                font-size: 12px;
                margin-top: 15px;
              }
              @media only screen and (max-width: 600px) {
                .email-wrapper { margin: 0; border-radius: 0; }
                .email-header, .email-body, .email-footer { padding: 25px 20px; }
                .info-row { flex-direction: column; align-items: flex-start; }
                .info-label { margin-bottom: 4px; }
              }
            </style>
          </head>
          <body>
            <div class="email-wrapper">
              <!-- Header -->
              <div class="email-header">
                <div class="logo">Poleris Digital</div>
                <div class="tagline">100% Hand-Coded Websites</div>
              </div>

              <!-- Body -->
              <div class="email-body">
                <div class="greeting">
                  Hi there,
                </div>

                <p style="font-size: 15px; color: #374151; margin-bottom: 20px;">
                  You've received a new message from your website contact form. Here are the details:
                </p>

                <!-- Message Content -->
                <div class="message-content">
                  ${message.replace(/\n/g, '<br>')}
                </div>

                <!-- Sender Information -->
                <div class="sender-info">
                  <div class="info-title">Sender Information</div>

                  <div class="info-row">
                    <div class="info-label">Name:</div>
                    <div class="info-value">${name}</div>
                  </div>

                  <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value">
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>

                  ${phone ? `
                  <div class="info-row">
                    <div class="info-label">Phone:</div>
                    <div class="info-value">
                      <a href="tel:${phone}">${phone}</a>
                    </div>
                  </div>
                  ` : ''}
                </div>

                <!-- Quick Reply Info -->
                <div class="cta-section">
                  <p style="font-size: 14px; color: #1f2937; margin-bottom: 12px; font-weight: 600;">
                    📧 Quick Reply
                  </p>
                  <p style="font-size: 13px; color: #6b7280; margin-bottom: 12px;">
                    Just hit "Reply" in your email client to respond directly to ${name.split(' ')[0]}
                  </p>
                  <div style="font-size: 12px; color: #9ca3af; font-style: italic;">
                    Your reply will automatically be sent to: ${email}
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="email-footer">
                <div class="footer-text">
                  <strong>Poleris Digital</strong><br>
                  Performance-focused web design that delivers results
                </div>

                <div class="divider"></div>

                <div class="footer-links">
                  <a href="https://polerisdigital.com" class="footer-link">Website</a>
                  <span style="color: rgba(255, 255, 255, 0.3);">|</span>
                  <a href="mailto:polerisllc@outlook.com" class="footer-link">Contact</a>
                </div>

                <div class="copyright">
                  © ${new Date().getFullYear()} Poleris Digital. All rights reserved.
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        data
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error.message
      },
      { status: 500 }
    );
  }
}
