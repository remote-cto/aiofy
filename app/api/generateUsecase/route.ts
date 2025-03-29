
import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

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
    const useCases = content
      .split(/\n+|\d+\.\s+/)
      .filter((line) => line.trim().length > 0)
      .slice(0, 3); // Ensure we only get three use cases

    return NextResponse.json({ useCases });
  } catch (error) {
    console.error("Error generating AI use cases:", error);
    return NextResponse.json(
      { error: "Failed to generate AI use cases" },
      { status: 500 }
    );
  }
}
