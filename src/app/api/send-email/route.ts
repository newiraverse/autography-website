import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Gmail SMTP configuration - using your existing credentials
const createGmailTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured. Please check GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    // Additional Gmail-specific configurations
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email templates
const getCompanyEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      margin: 0; 
      padding: 0;
    }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { 
      background: #f8f9fa; 
      padding: 20px; 
      border-bottom: 3px solid #2563eb; 
      margin-bottom: 20px;
    }
    .title { margin: 0; font-size: 24px; font-weight: 600; color: #1f2937; }
    .subtitle { margin: 5px 0 0 0; color: #6b7280; font-size: 14px; }
    .section { margin-bottom: 25px; }
    .section-title { 
      font-size: 16px; 
      font-weight: 600; 
      color: #1f2937; 
      margin-bottom: 10px; 
      border-bottom: 1px solid #e5e7eb; 
      padding-bottom: 5px;
    }
    .info-row { 
      display: flex; 
      margin-bottom: 8px; 
      padding: 8px 0;
    }
    .label { 
      font-weight: 500; 
      color: #4b5563; 
      width: 140px; 
      flex-shrink: 0;
    }
    .value { color: #1f2937; }
    .cover-letter { 
      background: #f9fafb; 
      padding: 15px; 
      border-left: 3px solid #2563eb; 
      margin-top: 10px;
      font-style: italic;
    }
    .footer { 
      margin-top: 30px; 
      padding-top: 20px; 
      border-top: 1px solid #e5e7eb; 
      color: #6b7280; 
      font-size: 14px;
    }
    .track-link {
      display: inline-block;
      margin-top: 15px;
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }
    .track-link:hover { color: #1d4ed8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">New Application Received</h1>
      <p class="subtitle">Application ID: ${data.applicationId}</p>
      <a href="#" class="track-link">Track Application →</a>
    </div>
    
    <div class="section">
      <div class="section-title">Position Details</div>
      <div class="info-row">
        <span class="label">Position:</span>
        <span class="value">${data.position.title}</span>
      </div>
      <div class="info-row">
        <span class="label">Department:</span>
        <span class="value">${data.position.department}</span>
      </div>
      <div class="info-row">
        <span class="label">Location:</span>
        <span class="value">${data.position.location}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Candidate Information</div>
      <div class="info-row">
        <span class="label">Name:</span>
        <span class="value">${data.applicant.firstName} ${data.applicant.lastName}</span>
      </div>
      <div class="info-row">
        <span class="label">Email:</span>
        <span class="value">${data.applicant.email}</span>
      </div>
      <div class="info-row">
        <span class="label">Phone:</span>
        <span class="value">${data.applicant.phone || 'Not provided'}</span>
      </div>
      <div class="info-row">
        <span class="label">Location:</span>
        <span class="value">${data.applicant.location || 'Not provided'}</span>
      </div>
      <div class="info-row">
        <span class="label">Experience:</span>
        <span class="value">${data.applicant.experience || 'Not provided'}</span>
      </div>
      <div class="info-row">
        <span class="label">Portfolio:</span>
        <span class="value">${data.applicant.portfolio || 'Not provided'}</span>
      </div>
      <div class="info-row">
        <span class="label">LinkedIn:</span>
        <span class="value">${data.applicant.linkedIn || 'Not provided'}</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Resume Information</div>
      <div class="info-row">
        <span class="label">File Name:</span>
        <span class="value">${data.resume.name}</span>
      </div>
      <div class="info-row">
        <span class="label">File Size:</span>
        <span class="value">${(data.resume.size / 1024 / 1024).toFixed(2)} MB</span>
      </div>
    </div>

    ${data.applicant.coverLetter ? `
    <div class="section">
      <div class="section-title">Cover Letter</div>
      <div class="cover-letter">
        ${data.applicant.coverLetter.replace(/\n/g, '<br>')}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <div class="section-title">Submission Details</div>
      <div class="info-row">
        <span class="label">Submitted:</span>
        <span class="value">${new Date(data.submissionDate).toLocaleString()}</span>
      </div>
    </div>

    <div class="footer">
      <p>This application was submitted through the Autography careers page.</p>
      <p>Please review and respond to the candidate within 48 hours.</p>
    </div>
  </div>
</body>
</html>
`;

const getApplicantEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      margin: 0; 
      padding: 0;
    }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { 
      background: #f8f9fa; 
      padding: 20px; 
      border-bottom: 3px solid #2563eb; 
      margin-bottom: 20px;
    }
    .title { margin: 0; font-size: 24px; font-weight: 600; color: #1f2937; }
    .subtitle { margin: 5px 0 0 0; color: #6b7280; font-size: 14px; }
    .section { margin-bottom: 25px; }
    .section-title { 
      font-size: 16px; 
      font-weight: 600; 
      color: #1f2937; 
      margin-bottom: 15px; 
      border-bottom: 1px solid #e5e7eb; 
      padding-bottom: 5px;
    }
    .info-box { 
      background: #f9fafb; 
      padding: 15px; 
      border-left: 3px solid #2563eb; 
      margin-bottom: 15px;
    }
    .info-row { 
      display: flex; 
      margin-bottom: 8px; 
      padding: 4px 0;
    }
    .label { 
      font-weight: 500; 
      color: #4b5563; 
      width: 120px; 
      flex-shrink: 0;
    }
    .value { color: #1f2937; }
    .steps { 
      list-style: none; 
      padding: 0; 
      margin: 0;
    }
    .step { 
      padding: 10px 0; 
      border-bottom: 1px solid #f3f4f6;
    }
    .step:last-child { border-bottom: none; }
    .step-title { font-weight: 500; color: #1f2937; }
    .step-desc { color: #6b7280; font-size: 14px; margin-top: 2px; }
    .footer { 
      margin-top: 30px; 
      padding-top: 20px; 
      border-top: 1px solid #e5e7eb; 
      color: #6b7280; 
      font-size: 14px;
    }
    .track-link {
      display: inline-block;
      margin-top: 15px;
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }
    .track-link:hover { color: #1d4ed8; }
    .contact-info { 
      background: #f9fafb; 
      padding: 15px; 
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">Application Sent to Autography</h1>
      <p class="subtitle">Thank you for your interest in joining our team</p>
      <a href="#" class="track-link">Track Application →</a>
    </div>
    
    <p>Hi ${data.applicant.firstName},</p>
    <p>Thank you for your interest in joining our team at Autography. We have successfully received your application for the <strong>${data.position.title}</strong> position.</p>
    
    <div class="section">
      <div class="section-title">Application Summary</div>
      <div class="info-box">
        <div class="info-row">
          <span class="label">Position:</span>
          <span class="value">${data.position.title}</span>
        </div>
        <div class="info-row">
          <span class="label">Department:</span>
          <span class="value">${data.position.department}</span>
        </div>
        <div class="info-row">
          <span class="label">Application ID:</span>
          <span class="value">${data.applicationId}</span>
        </div>
        <div class="info-row">
          <span class="label">Submitted:</span>
          <span class="value">${new Date(data.submissionDate).toLocaleString()}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">What Happens Next</div>
      <ul class="steps">
        <li class="step">
          <div class="step-title">Review Process</div>
          <div class="step-desc">Our hiring team will review your application within 5-7 business days</div>
        </li>
        <li class="step">
          <div class="step-title">Initial Screening</div>
          <div class="step-desc">If your profile matches our requirements, we'll reach out for a preliminary discussion</div>
        </li>
        <li class="step">
          <div class="step-title">Interview Process</div>
          <div class="step-desc">Qualified candidates will be invited for technical and cultural fit interviews</div>
        </li>
        <li class="step">
          <div class="step-title">Decision</div>
          <div class="step-desc">We'll notify you of our decision regardless of the outcome</div>
        </li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title">About Autography</div>
      <p>We're building the future of AI-powered wellness through intelligent journaling. Our mission is to help people discover insights, growth, and wellbeing through meaningful self-reflection.</p>
      <p>Join us in transforming how millions of people connect with themselves and their personal growth journey.</p>
    </div>

    <div class="section">
      <div class="section-title">Questions</div>
      <p>If you have any questions about your application or our hiring process, feel free to reach out:</p>
      <div class="contact-info">
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">careers@autography.ai</span>
        </div>
        <div class="info-row">
          <span class="label">Website:</span>
          <span class="value">autography.ai</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <p><strong>Best regards,</strong><br>The Autography Team</p>
      <p style="margin-top: 15px; font-size: 12px;">
        This is an automated confirmation email. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const { to, subject, type, data } = await request.json();

    // Input validation with detailed error messages
    if (!to || typeof to !== 'string' || !to.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid recipient email address', code: 'INVALID_EMAIL' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json(
        { error: 'Subject is required and cannot be empty', code: 'INVALID_SUBJECT' },
        { status: 400 }
      );
    }

    if (!type || !['company_notification', 'applicant_confirmation'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid email type. Must be company_notification or applicant_confirmation', code: 'INVALID_TYPE' },
        { status: 400 }
      );
    }

    if (!data || typeof data !== 'object') {
      return NextResponse.json(
        { error: 'Email data is required', code: 'MISSING_DATA' },
        { status: 400 }
      );
    }

    // Generate email content based on type
    let htmlContent = '';
    let emailSubject = subject;
    
    if (type === 'company_notification') {
      htmlContent = getCompanyEmailTemplate(data);
      // Add company prefix for internal tracking
      emailSubject = `[AUTOGRAPHY CAREERS] ${subject}`;
    } else if (type === 'applicant_confirmation') {
      htmlContent = getApplicantEmailTemplate(data);
      // Add friendly prefix for applicant
      emailSubject = `✅ ${subject}`;
    }

    // Verify Gmail transporter connection before sending
    const gmailTransporter = createGmailTransporter();
    try {
      await gmailTransporter.verify();
      console.log('✅ Gmail SMTP connection verified successfully');
    } catch (verifyError: any) {
      console.error('❌ Gmail SMTP verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'Email service configuration error', 
          code: 'SMTP_CONFIG_ERROR',
          details: process.env.NODE_ENV === 'development' ? verifyError?.message : undefined
        },
        { status: 500 }
      );
    }

    // Send email using Gmail SMTP
    const emailOptions = {
      from: {
        name: 'Autography Careers',
        address: process.env.GMAIL_USER!
      },
      to: to,
      subject: emailSubject,
      html: htmlContent,
      // Add headers for tracking and deliverability
      headers: {
        'X-Mailer': 'Autography Careers Portal',
        'X-Priority': type === 'company_notification' ? '1' : '3',
        'X-Application-Type': type,
        ...(process.env.GMAIL_USER && { 'Return-Path': process.env.GMAIL_USER })
      }
    };

    const startTime = Date.now();
    const emailResult = await gmailTransporter.sendMail(emailOptions);
    const sendDuration = Date.now() - startTime;

    // Log successful email send with details (Google-style logging)
    console.log(`✅ Email sent successfully via Gmail SMTP (${sendDuration}ms)`);
    console.log(`📧 Type: ${type}`);
    console.log(`📬 To: ${to}`);
    console.log(`📋 Subject: ${emailSubject}`);
    console.log(`🆔 Message ID: ${emailResult.messageId || 'N/A'}`);
    console.log(`📊 Response: ${emailResult.response || 'N/A'}`);

    // Additional logging for company notifications
    if (type === 'company_notification') {
      console.log('🏢 COMPANY NOTIFICATION DETAILS:');
      console.log(`👤 Applicant: ${data.applicant?.firstName} ${data.applicant?.lastName}`);
      console.log(`💼 Position: ${data.position?.title}`);
      console.log(`� Resume: ${data.resume?.name || 'No resume'}`);
      console.log(`🆔 Application ID: ${data.applicationId}`);
    }

    // Return detailed success response
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully via Gmail SMTP',
      details: {
        messageId: emailResult.messageId || 'unknown',
        recipient: to,
        emailType: type,
        sendDuration: `${sendDuration}ms`,
        timestamp: new Date().toISOString(),
        service: 'gmail_smtp'
      }
    });

  } catch (error: any) {
    // Enhanced error logging with stack trace
    console.error('❌ Email sending failed:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Stack trace:', error.stack);

    // Categorize errors for better debugging
    let errorCategory = 'UNKNOWN_ERROR';
    let userMessage = 'Failed to send email. Please try again.';

    if (error.code === 'EAUTH') {
      errorCategory = 'AUTHENTICATION_ERROR';
      userMessage = 'Email authentication failed. Please check Gmail credentials.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorCategory = 'CONNECTION_ERROR';
      userMessage = 'Email service temporarily unavailable. Please try again.';
    } else if (error.code === 'EMESSAGE') {
      errorCategory = 'MESSAGE_ERROR';
      userMessage = 'Invalid email content. Please check your input.';
    }

    return NextResponse.json(
      { 
        error: userMessage,
        code: errorCategory,
        timestamp: new Date().toISOString(),
        // Include technical details in development
        ...(process.env.NODE_ENV === 'development' && {
          technicalDetails: {
            originalError: error.message,
            errorCode: error.code
          }
        })
      },
      { status: 500 }
    );
  }
}
