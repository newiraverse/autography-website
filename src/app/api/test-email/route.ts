import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Test Gmail SMTP configuration
export async function GET() {
  try {
    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({
        success: false,
        error: 'Gmail credentials not configured',
        details: {
          hasGmailUser: !!process.env.GMAIL_USER,
          hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD
        }
      }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Verify connection
    const startTime = Date.now();
    await transporter.verify();
    const verifyDuration = Date.now() - startTime;

    console.log('✅ Gmail SMTP test successful');
    console.log(`📧 Gmail User: ${process.env.GMAIL_USER}`);
    console.log(`⏱️ Verification Time: ${verifyDuration}ms`);

    return NextResponse.json({
      success: true,
      message: 'Gmail SMTP connection verified successfully',
      details: {
        gmailUser: process.env.GMAIL_USER,
        verificationTime: `${verifyDuration}ms`,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error: any) {
    console.error('❌ Gmail SMTP test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Gmail SMTP connection failed',
      details: {
        errorMessage: error.message,
        errorCode: error.code,
        timestamp: new Date().toISOString()
      }
    }, { status: 500 });
  }
}

// Send a test email
export async function POST(request: NextRequest) {
  try {
    const { testEmail } = await request.json();

    if (!testEmail || !testEmail.includes('@')) {
      return NextResponse.json({
        success: false,
        error: 'Valid test email address required'
      }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Send test email
    const result = await transporter.sendMail({
      from: {
        name: 'Autography Careers Test',
        address: process.env.GMAIL_USER!
      },
      to: testEmail,
      subject: '✅ Autography Email System Test',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">🎉 Email System Test Successful!</h2>
          <p>This is a test email from the Autography careers system.</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>From:</strong> ${process.env.GMAIL_USER}</p>
          <p><strong>To:</strong> ${testEmail}</p>
          <p style="color: #059669;">✅ Gmail SMTP is working correctly!</p>
          <hr>
          <p style="font-size: 12px; color: #6b7280;">
            This is an automated test email from Autography careers system.
          </p>
        </div>
      `
    });

    console.log('✅ Test email sent successfully');
    console.log(`📧 To: ${testEmail}`);
    console.log(`🆔 Message ID: ${result.messageId}`);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      details: {
        messageId: result.messageId,
        recipient: testEmail,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error: any) {
    console.error('❌ Test email failed:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to send test email',
      details: {
        errorMessage: error.message,
        errorCode: error.code
      }
    }, { status: 500 });
  }
}
