import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Use explicit SMTP config (more explicit than `service: 'gmail'`)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,            // 465 for secure TLS; use 587 with secure: false optionally
      secure: true,         // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // VERIFY connection/auth — useful for debugging
    try {
      await transporter.verify()
      console.log("SMTP Verified: ready to send")
    } catch (verifyErr: any) {
      console.error("SMTP verify failed:", verifyErr)
      // return useful error to client while keeping sensitive details out of response
      return NextResponse.json({ error: "SMTP verification failed. Check credentials." }, { status: 500 })
    }

    // Send mail
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📩 New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
      replyTo: email, // important: clicking reply in your inbox will open a reply to the visitor
    })

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (error: any) {
    console.error("Error sending email:", error)
    // show a friendly error message
    return NextResponse.json({ error: "Failed to send message. See server logs." }, { status: 500 })
  }
}
