//app/api/strategySession/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: Boolean(process.env.EMAIL_SECURE) || false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

interface StrategySessionFormData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  industry?: string;
  challenge?: string;

  message?: string; 
}

export async function POST(request: NextRequest) {
  try {
    const body: StrategySessionFormData = await request.json();

    // Extract company, role, industry, challenge from message if they're missing
    if (body.message && (!body.company || !body.role || !body.industry || !body.challenge)) {
      const messageParts = body.message.split('\n').filter(line => line.trim() !== '');
      
      if (!body.company && messageParts.some(part => part.startsWith('Company:'))) {
        body.company = messageParts.find(part => part.startsWith('Company:'))?.replace('Company:', '')?.trim() || '';
      }
      
      if (!body.role && messageParts.some(part => part.startsWith('Role:'))) {
        body.role = messageParts.find(part => part.startsWith('Role:'))?.replace('Role:', '')?.trim() || '';
      }
      
      if (!body.industry && messageParts.some(part => part.startsWith('Industry:'))) {
        body.industry = messageParts.find(part => part.startsWith('Industry:'))?.replace('Industry:', '')?.trim() || '';
      }
      
      if (!body.challenge && messageParts.some(part => part.startsWith('Challenge/Goal:'))) {
        body.challenge = messageParts.find(part => part.startsWith('Challenge/Goal:'))?.replace('Challenge/Goal:', '')?.trim() || '';
      }
    }

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: body.email,
      subject: "Your AIofy Strategy Session Request",
      html: `
        <h1>Thank You for Booking a Strategy Session</h1>
        <p>Hello ${body.name},</p>
        <p>We've received your strategy session request and are excited to help you explore AI solutions for your business.</p>        
        <p>Best regards,</p>
        <p>The AIofy Team</p>
      `,
    };

    // Send notification email to the host/admin
    const hostMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      subject: "New Strategy Session Request",
      html: `
        <h1>New Strategy Session Request</h1>
        <p><strong>From:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
        <p><strong>Role:</strong> ${body.role || 'Not provided'}</p>
        <p><strong>Industry:</strong> ${body.industry || 'Not provided'}</p>
        <p><strong>Challenge/Goal:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${(body.challenge || 'Not provided').replace(/\n/g, "<br>")}
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(hostMailOptions),
    ]);

    return NextResponse.json(
      { message: "Your information has been submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit your information. Please try again later." },
      { status: 500 }
    );
  }
}