import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // -------------------------------------------------------
    // OPTION A: Forward to a webhook (Formspree / Make / Zapier)
    // Set FORM_WEBHOOK_URL in your .env.local
    // -------------------------------------------------------
    const webhookUrl =
      process.env.FORM_WEBHOOK_URL ?? siteConfig.formWebhookUrl;

    if (webhookUrl && !webhookUrl.includes("YOUR_FORM_ID")) {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, phone, service, message }),
      });

      if (!webhookRes.ok) {
        throw new Error(`Webhook returned ${webhookRes.status}`);
      }
    }

    // -------------------------------------------------------
    // OPTION B: Send email via SMTP (nodemailer)
    // Uncomment and configure if you want email notifications
    // -------------------------------------------------------
    // const nodemailer = require("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT ?? 587),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: siteConfig.email,
    //   subject: `New Quote Request — ${service}`,
    //   text: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    // });

    // Always log to server console so you can see leads in hosting logs
    console.log("[LEAD]", { name, phone, service, message, ts: new Date().toISOString() });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[QUOTE API ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
