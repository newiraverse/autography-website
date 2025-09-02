import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content for you (notification)
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'newiraverse@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Contact Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This message was sent from the Autography website contact form.
            </p>
            <p style="color: #666; font-size: 14px; margin: 5px 0 0 0;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      replyTo: email, // Set reply-to as the sender's email
    };

    // Email content for the user (confirmation)
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Autography!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Thank You for Contacting Us!</h2>
          
          <div style="margin: 20px 0;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to Autography! We have received your message and will get back to you within 24 hours.</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <p>In the meantime, feel free to explore our platform and discover how AI-powered journaling can transform your daily reflection practice.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Best regards,<br>
              The Autography Team
            </p>
            <p style="color: #666; font-size: 14px; margin: 10px 0 0 0;">
              Email: newiraverse@gmail.com<br>
              Phone: +91 8286666066
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
