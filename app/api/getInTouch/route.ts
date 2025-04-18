// app/api/getInTouch/route.ts
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

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
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

    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: body.email,
      subject: "Thank You for Your Message",
      html: `
        <h1>Thank You for Contacting Us</h1>
        <p>Hello ${body.name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Your submitted information:</p>
        <ul>
          <li><strong>Name:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Phone:</strong> ${body.phone}</li>
        </ul>
        <p><strong>Your message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${body.message.replace(/\n/g, "<br>")}
        </div>
        
        <p>Best regards,</p>
        <p>The AIofy Team</p>
      `,
    };

    const hostMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${body.message.replace(/\n/g, "<br>")}
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(hostMailOptions),
    ]);

    return NextResponse.json(
      { message: "Your message has been sent. We'll contact you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
