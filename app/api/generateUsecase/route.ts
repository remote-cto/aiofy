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

    // Modified prompt to request specific "AI Can" style headings
    const enhancedPrompt = `
    Analyze the website ${website} in real time and identify three innovative, practical, and relevant AI use cases for this company that can drive significant business growth.
    
    For each use case:
    1. Create a concise headline starting with "AI Can" that captures the essence of the use case (e.g., "AI Can Personalize Customer Journeys")
    2. Provide a brief description of how this AI solution would benefit the business
    
    Format each use case as: 
    HEADING: [Your "AI Can" headline]
    DESCRIPTION: [Your description]
    
    Only include these three use cases without any additional explanation.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: enhancedPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 600,
    });

    // Parse the response to extract the three use cases
    const content = response.choices[0].message.content || "";

    // Split by double line breaks to separate use cases
    const rawUseCases = content.split(/\n\n+/).filter(uc => uc.trim().length > 0);
    
    // Parse each use case to extract heading and description
    const useCases = rawUseCases.slice(0, 3).map((useCase, index) => {
      // Extract heading and description using regex or string operations
      let heading = "AI Can Transform Your Business";
      let description = useCase;
      
      // Try to extract heading and description from formatted text
      const headingMatch = useCase.match(/HEADING:\s*(AI Can[^]*?)(?:\n|$)/i);
      const descMatch = useCase.match(/DESCRIPTION:\s*([^]*?)(?:\n\n|$)/i);
      
      if (headingMatch && headingMatch[1]) {
        heading = headingMatch[1].trim();
      } else {
        // If no heading format, try to extract the first line if it starts with "AI Can"
        const lines = useCase.split('\n');
        if (lines[0] && lines[0].trim().startsWith("AI Can")) {
          heading = lines[0].trim();
          description = lines.slice(1).join('\n').trim();
        }
      }
      
      if (descMatch && descMatch[1]) {
        description = descMatch[1].trim();
      }
      
      // Ensure heading starts with "AI Can"
      if (!heading.startsWith("AI Can")) {
        heading = "AI Can " + heading;
      }
      
      return {
        id: index + 1,
        title: heading,
        description: description.replace(/^DESCRIPTION:\s*/i, '').replace(/^HEADING:.*/im, '').trim(),
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
            <h3 style="margin-top: 0; color: #1e3a8a; font-weight: bold;">${useCase.title}</h3>
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