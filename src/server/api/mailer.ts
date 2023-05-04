import nodemailer from "nodemailer"
import { env } from "../../env.mjs"

const email = env.EMAIL
const pass = env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    }
})

export const mailOptions = {
    from: email,
    to: email
}