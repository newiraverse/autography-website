import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { 
      email, 
      cardholderName, 
      planName, 
      price, 
      billingPeriod,
      billingAddress,
      city,
      state,
      postalCode,
      phoneNumber,
      cardNumber,
      trialEndDate
    } = await request.json();

    // Validate required fields
    if (!email || !cardholderName || !planName || !price) {
      return NextResponse.json(
        { error: 'Required billing information missing' },
        { status: 400 }
      );
    }

    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Mask card number for security (show only last 4 digits)
    const maskedCardNumber = cardNumber ? `****-****-****-${cardNumber.slice(-4)}` : 'Card ending in ****';

    // Calculate trial end date (14 days from now)
    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 14);
    const formattedTrialEnd = trialEnd.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Customer confirmation email
    const customerMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `✅ Your ${planName} Trial Has Started - Autography`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; padding: 0; background-color: #f8f9fa;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1967d2 0%, #1557b0 100%); padding: 30px 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Autography</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Your AI-Powered Journaling Journey Begins</p>
          </div>

          <!-- Main Content -->
          <div style="background: white; padding: 40px;">
            <!-- Success Message -->
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="background: #e8f5e8; border-radius: 50px; width: 80px; height: 80px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 40px;">✅</span>
              </div>
              <h2 style="color: #1967d2; margin: 0 0 10px 0; font-size: 24px;">Trial Started Successfully!</h2>
              <p style="color: #666; margin: 0; font-size: 16px;">Welcome to Autography, ${cardholderName}!</p>
            </div>

            <!-- Trial Information -->
            <div style="background: #f8f9ff; border: 1px solid #e0e6ff; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
              <h3 style="color: #1967d2; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🎉</span> Your Trial Details
              </h3>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Plan:</span>
                  <span style="color: #333; font-weight: 600;">${planName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Trial Period:</span>
                  <span style="color: #333; font-weight: 600;">14 Days Free</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Trial Ends:</span>
                  <span style="color: #333; font-weight: 600;">${formattedTrialEnd}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">After Trial:</span>
                  <span style="color: #333; font-weight: 600;">₹${price}/${billingPeriod}</span>
                </div>
              </div>
            </div>

            <!-- Billing Information -->
            <div style="background: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">💳</span> Billing Information
              </h3>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Cardholder:</span>
                  <span style="color: #333; font-weight: 600;">${cardholderName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Card:</span>
                  <span style="color: #333; font-weight: 600;">${maskedCardNumber}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Email:</span>
                  <span style="color: #333; font-weight: 600;">${email}</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="color: #666; font-weight: 500;">Phone:</span>
                  <span style="color: #333; font-weight: 600;">+91 ${phoneNumber}</span>
                </div>
              </div>
            </div>

            <!-- Address Information -->
            <div style="background: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">📍</span> Billing Address
              </h3>
              <div style="color: #666; line-height: 1.6;">
                <p style="margin: 0 0 8px 0; font-weight: 600; color: #333;">${cardholderName}</p>
                <p style="margin: 0 0 4px 0;">${billingAddress}</p>
                <p style="margin: 0 0 4px 0;">${city}, ${state}</p>
                <p style="margin: 0;">PIN: ${postalCode}</p>
              </div>
            </div>

            <!-- Important Notes -->
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
              <h3 style="color: #856404; margin: 0 0 12px 0; font-size: 16px; display: flex; align-items: center;">
                <span style="margin-right: 8px;">⚠️</span> Important Information
              </h3>
              <ul style="color: #856404; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Your trial starts immediately and lasts for 14 days</li>
                <li>You can cancel anytime before ${formattedTrialEnd} with no charges</li>
                <li>After the trial, you'll be charged ₹${price} ${billingPeriod}</li>
                <li>We'll send you reminders before your trial ends</li>
              </ul>
            </div>

            <!-- Next Steps -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h3 style="color: #333; margin: 0 0 20px 0; font-size: 20px;">What's Next?</h3>
              <div style="display: grid; gap: 15px; max-width: 400px; margin: 0 auto;">
                <div style="background: #e8f5e8; border-radius: 8px; padding: 15px; text-align: left;">
                  <strong style="color: #2d5a3d;">1. Start Journaling</strong>
                  <p style="margin: 5px 0 0 0; color: #2d5a3d; font-size: 14px;">Login to your account and begin your first journal entry</p>
                </div>
                <div style="background: #e3f2fd; border-radius: 8px; padding: 15px; text-align: left;">
                  <strong style="color: #1565c0;">2. Explore AI Features</strong>
                  <p style="margin: 5px 0 0 0; color: #1565c0; font-size: 14px;">Discover personalized insights and writing prompts</p>
                </div>
                <div style="background: #fce4ec; border-radius: 8px; padding: 15px; text-align: left;">
                  <strong style="color: #ad1457;">3. Track Your Growth</strong>
                  <p style="margin: 5px 0 0 0; color: #ad1457; font-size: 14px;">Watch your patterns and celebrate your progress</p>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div style="text-align: center; margin-bottom: 30px;">
              <a href="https://autography.com/login" style="background: linear-gradient(135deg, #1967d2 0%, #1557b0 100%); color: white; text-decoration: none; padding: 15px 40px; border-radius: 50px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(25, 103, 210, 0.3);">
                Start Journaling Now →
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="color: #666; margin: 0 0 10px 0; font-size: 14px;">
              Need help? Contact us at 
              <a href="mailto:newiraverse@gmail.com" style="color: #1967d2; text-decoration: none;">newiraverse@gmail.com</a>
              or call +91 8286666066
            </p>
            <p style="color: #999; margin: 0; font-size: 12px;">
              © 2025 Autography. All rights reserved.<br>
              To manage your subscription or cancel, visit your account settings.
            </p>
          </div>
        </div>
      `,
    };

    // Admin notification email
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'newiraverse@gmail.com',
      subject: `🎉 New ${planName} Trial Started - ${cardholderName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #1967d2; border-bottom: 2px solid #1967d2; padding-bottom: 10px;">New Trial Started!</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Customer Information:</h3>
            <p><strong>Name:</strong> ${cardholderName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> +91 ${phoneNumber}</p>
            <p><strong>Plan:</strong> ${planName}</p>
            <p><strong>Price:</strong> ₹${price}/${billingPeriod}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Billing Address:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
              <p style="margin: 0;">${billingAddress}</p>
              <p style="margin: 0;">${city}, ${state} - ${postalCode}</p>
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Payment Information:</h3>
            <p><strong>Card:</strong> ${maskedCardNumber}</p>
            <p><strong>Trial Ends:</strong> ${formattedTrialEnd}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Customer will be charged ₹${price} on ${formattedTrialEnd} unless they cancel.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Billing confirmation email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending billing email:', error);
    return NextResponse.json(
      { error: 'Failed to send billing confirmation email. Please try again.' },
      { status: 500 }
    );
  }
}
