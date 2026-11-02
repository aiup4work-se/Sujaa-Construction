import { NextResponse } from "next/server";

// Receives the contact form. Right now it only validates and logs.
// To email enquiries, plug in a provider here (e.g. Resend, SendGrid, or SMTP via nodemailer)
// and store the API key in .env.local.
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const required = ["name", "email", "phone", "message"];
  const missing = required.filter((k) => !body[k]?.toString().trim());
  if (missing.length) {
    return NextResponse.json({ error: `Please fill in: ${missing.join(", ")}.` }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  console.log("New enquiry:", body);
  return NextResponse.json({ ok: true });
}
