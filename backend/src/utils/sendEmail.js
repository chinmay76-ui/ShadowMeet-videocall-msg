// utils/sendEmail.js
import axios from "axios";

export const transporter = {
  sendMail: async ({ to, subject, html }) => {
    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: { 
            email: "lmsbc56@gmail.com", 
            name: "ShadowMeet" 
          },
          to: [{ email: to }],
          subject,
          htmlContent: html,
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Brevo email sent:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Brevo sendMail error:",
        error.response?.data || error
      );
      throw new Error("Email sending failed");
    }
  },
};
