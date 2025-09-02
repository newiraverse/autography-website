import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Store OTPs temporarily (in production, use Redis or database)
const otpStore = new Map<string, { otp: string; expires: number; userData: any }>();

export async function POST(request: NextRequest) {
  try {
    const { action, email, otp, userData } = await request.json();

    if (action === 'send') {
      // Generate 6-digit OTP
      const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
      const expires = Date.now() + 10 * 60 * 1000; // 10 minutes

      // Store OTP with user data
      otpStore.set(email, { otp: generatedOTP, expires, userData });

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Send OTP email
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Your Autography Payment Verification Code',
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 500px; margin: 0 auto; padding: 0; background-color: #f8f9fa;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1967d2 0%, #1557b0 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Autography</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Payment Verification</p>
            </div>

            <!-- Main Content -->
            <div style="background: white; padding: 40px; text-align: center;">
              <div style="background: #e8f5e8; border-radius: 50px; width: 80px; height: 80px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 40px;">🔐</span>
              </div>
              
              <h2 style="color: #333; margin: 0 0 10px 0; font-size: 22px;">Verify Your Payment</h2>
              <p style="color: #666; margin: 0 0 30px 0; line-height: 1.5;">
                To complete your trial setup, please enter this verification code:
              </p>

              <!-- OTP Code -->
              <div style="background: #f8f9ff; border: 2px solid #1967d2; border-radius: 12px; padding: 25px; margin: 20px 0; display: inline-block;">
                <div style="font-size: 32px; font-weight: bold; color: #1967d2; letter-spacing: 6px; font-family: 'Courier New', monospace;">
                  ${generatedOTP}
                </div>
              </div>

              <p style="color: #666; margin: 20px 0; font-size: 14px;">
                This code will expire in <strong>10 minutes</strong>
              </p>

              <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: left;">
                <p style="color: #856404; margin: 0; font-size: 14px;">
                  <strong>Security Note:</strong> Never share this code with anyone. Autography will never ask for your verification code via phone or email.
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #666; margin: 0; font-size: 12px;">
                If you didn't request this code, please ignore this email.<br>
                © 2025 Autography. All rights reserved.
              </p>
            </div>
          </div>
        `,
      });

      return NextResponse.json(
        { message: 'OTP sent successfully!' },
        { status: 200 }
      );

    } else if (action === 'verify') {
      // Verify OTP
      const storedData = otpStore.get(email);
      
      if (!storedData) {
        return NextResponse.json(
          { error: 'OTP not found or expired' },
          { status: 400 }
        );
      }

      if (Date.now() > storedData.expires) {
        otpStore.delete(email);
        return NextResponse.json(
          { error: 'OTP has expired' },
          { status: 400 }
        );
      }

      if (storedData.otp !== otp) {
        return NextResponse.json(
          { error: 'Invalid OTP' },
          { status: 400 }
        );
      }

      // OTP verified successfully, clean up
      const userData = storedData.userData;
      otpStore.delete(email);

      return NextResponse.json(
        { message: 'OTP verified successfully!', userData },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error handling OTP:', error);
    return NextResponse.json(
      { error: 'Failed to process OTP request' },
      { status: 500 }
    );
  }
}
