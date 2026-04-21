import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TO = "j.kennedy@devilsthumbconstruction.com";
const FROM = "Devil's Thumb Construction <noreply@mail.devilsthumbconstruction.com>";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      email,
      phone,
      zip,
      callHour,
      callMinute,
      callAmPm,
      message,
    } = data as {
      name?: string;
      email?: string;
      phone?: string;
      zip?: string;
      callHour?: string;
      callMinute?: string;
      callAmPm?: string;
      message?: string;
    };

    if (!name || !email || !phone || !zip || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const callTime =
      callHour && callMinute
        ? `${callHour}:${callMinute} ${callAmPm || "AM"}`
        : "Not specified";

    const html = `
      <div style="font-family: Inter, system-ui, sans-serif; color: #13251e; max-width: 600px; margin: 0 auto;">
        <div style="background: #13251e; color: #fff; padding: 24px 28px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 22px; color: #e09f18; font-weight: 700; letter-spacing: 0.5px;">New Contact Inquiry</h1>
          <p style="margin: 4px 0 0; font-size: 14px; color: rgba(255,255,255,0.8);">Devil&apos;s Thumb Construction · devilsthumbconstruction.com</p>
        </div>
        <div style="background: #fff; padding: 28px; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #5d6661; width: 140px; vertical-align: top;"><strong style="color: #13251e;">Name</strong></td>
              <td style="padding: 10px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #5d6661; vertical-align: top;"><strong style="color: #13251e;">Email</strong></td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2c4b40; text-decoration: none;">${escapeHtml(email)}</a></td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #5d6661; vertical-align: top;"><strong style="color: #13251e;">Phone</strong></td>
              <td style="padding: 10px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #2c4b40; text-decoration: none;">${escapeHtml(phone)}</a></td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #5d6661; vertical-align: top;"><strong style="color: #13251e;">Zip Code</strong></td>
              <td style="padding: 10px 0;">${escapeHtml(zip)}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #5d6661; vertical-align: top;"><strong style="color: #13251e;">Preferred Call Time</strong></td>
              <td style="padding: 10px 0;">${escapeHtml(callTime)}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 22px 0 16px;" />
          <div style="color: #5d6661; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600;">Message</div>
          <div style="background: #f8f9f8; padding: 16px 18px; border-radius: 6px; border-left: 3px solid #e09f18; white-space: pre-wrap; line-height: 1.6; color: #13251e;">${escapeHtml(
            message
          )}</div>
        </div>
        <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 14px;">
          Submitted via the Devil&apos;s Thumb Construction website contact form.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New Website Inquiry: ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
