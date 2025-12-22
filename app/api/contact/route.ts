import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json() // { name, email, subject, message }

    // Send to Formspree
    const res = await fetch("https://formspree.io/f/xanpnkvn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      return NextResponse.json({ success: true, data })
    } else {
      return NextResponse.json({ success: false, error: data.error || "Failed to send" })
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: "Server error" })
  }
}
