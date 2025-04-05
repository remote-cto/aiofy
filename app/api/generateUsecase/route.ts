// app/api/generateUsecase/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import nodemailer from "nodemailer";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, website, email } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Parse the response to extract the three use cases
    const content = response.choices[0].message.content || "";

    // Split the content by new lines or bullet points to get individual use cases
    const useCasesText = content
      .split(/\n+|\d+\.\s+/)
      .filter((line) => line.trim().length > 0)
      .slice(0, 3); // Ensure we only get three use cases

    // Format use cases with numbered titles
    const useCases = useCasesText.map((text, index) => {
      return {
        id: index + 1,
        title: `Use Case ${index + 1}`,
        description: text,
      };
    });

    // Send email if website and email are provided
    if (website && email) {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Format use cases for email
      const useCasesHtml = useCases
        .map(
          (useCase) => `
          <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h3 style="margin-top: 0; color: #333;">Use Case ${useCase.id}</h3>
            <p style="color: #555;">${useCase.description}</p>
          </div>
        `
        )
        .join("");

      // Create email content
      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New AI Use Case Analysis</h2>
          <p><strong>Website:</strong> ${website}</p>
          <p><strong>User Email:</strong> ${email}</p>
          
          <h3 style="margin-top: 30px; color: #333;">Generated AI Use Cases:</h3>
          ${useCasesHtml}
        </div>
      `;

      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `AI Use Case Analysis for ${website}`,
        html: emailContent,
      });
    }

    return NextResponse.json({ useCases });
  } catch (error) {
    console.error("Error generating AI use cases or sending email:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}