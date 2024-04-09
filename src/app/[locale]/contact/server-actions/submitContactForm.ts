"use server";

import sgMail from "@sendgrid/mail";

export interface SubmitContactFormState {
  success: boolean | null;
}

const submitContactForm = async (
  state: SubmitContactFormState,
  formData: FormData
) => {
  const sendGridApiKey = process.env["SEND_GRID_API_KEY"];
  if (!sendGridApiKey) {
    throw new Error("Send grid API key is not set");
  }

  // Initialize SendGrid with your API key
  sgMail.setApiKey(sendGridApiKey);

  console.log("API KEY", sendGridApiKey);

  const userEmail = formData.get("userEmail") as string;
  const userName = formData.get("userName") as string;
  const message = formData.get("message") as string;

  if (!userEmail) {
    throw new Error("user email is missing");
  }

  if (!userName) {
    throw new Error("user name is missing");
  }

  if (!message) {
    throw new Error("message is missing");
  }

  // Send email
  await sgMail.send({
    to: "support@mefit.pro",
    from: "support@mefit.pro",
    subject: `ME Fit Pro outreach - ${userName}`,
    text: message,
    replyTo: userEmail,
    cc: userEmail,
  });

  return {
    success: true,
  };
};

export default submitContactForm;
