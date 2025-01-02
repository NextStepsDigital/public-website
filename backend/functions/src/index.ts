/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import {onRequest} from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";
import {defineSecret} from "firebase-functions/params";
import {logger} from "firebase-functions";

// Define secrets
const emailUser = defineSecret("EMAIL_USER");
const emailPass = defineSecret("EMAIL_PASS");

export const sendContactEmail = onRequest(
  {secrets: [emailUser, emailPass]},
  async (request, response) => {
    try {
      const {firstName, lastName, email, message} = request.body;

      if (!firstName || !lastName || !email || !message) {
        response.status(400).send("Missing form details.");
        return;
      }

      logger.info("Email: " + emailUser);

      // Configure Nodemailer for IONOS SMTP
      const transporter = nodemailer.createTransport({
        host: "smtp.ionos.co.uk",
        port: 587,
        secure: false, // Upgrade later with STARTTLS
        auth: {
          user: emailUser.value(),
          pass: emailPass.value(),
        },
      });

      // Compose the email
      const mailOptions = {
        from: emailUser.value(), // Sender address
        to: emailUser.value(), // Recipient address
        subject: "New Contact Form Submission",
        text: `
          You have a new contact form submission:

          First Name: ${firstName}
          Last Name: ${lastName}
          Email: ${email}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      response.status(200).send("Email sent successfully!");
    } catch (error) {
      logger.error("Error sending email:", error);
      response.status(500).send("Failed to send email.");
    }
  }
);
