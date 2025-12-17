import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { messages, mode } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: `You are BEO. Mode: ${mode}` }, ...messages],
  });
  return NextResponse.json({ reply: response.choices[0].message.content });
}