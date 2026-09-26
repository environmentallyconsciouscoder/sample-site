import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, message, audience } = await req.json();

  if (!name || !email || !company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "RetroSet Demo Requests <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `${audience ? `[${audience}] Enquiry` : "Demo request"} from ${name} at ${company}`,
    text: [
      ...(audience ? [`Audience: ${audience}`] : []),
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Message: ${message || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
