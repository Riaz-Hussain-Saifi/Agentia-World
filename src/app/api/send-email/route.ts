import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { firstName, lastName, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "infosaifideveloper@gmail.com",
    subject: `New message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
  }
}

