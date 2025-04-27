"use server";

import nodemailer from "nodemailer";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  mobile: string;
  propertyType: string;
  description: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail user
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aliakram9789@gmail.com", // Receiver's email
      subject: `New Inquiry from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Mobile: ${formData.mobile}
        Property Type: ${formData.propertyType}
        Description: ${formData.description}
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email. Please try again later." };
  }
};
