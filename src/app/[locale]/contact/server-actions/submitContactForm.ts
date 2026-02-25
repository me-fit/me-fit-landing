"use server";

export interface SubmitContactFormState {
  success: boolean | null;
}

const submitContactForm = async (
  state: SubmitContactFormState,
  formData: FormData
) => {
  const messageBirdApiKey = process.env["MESSAGE_BIRD_API_KEY"];
  const recaptchaSecretKey = process.env["RECAPTCHA_SECRET_KEY"];
  const workspaceId = "f00120af-345e-4ede-a51e-a8d7997c635b";
  const channelId = "7533eb22-bbe8-54f0-bf61-53809f36448a";

  if (!messageBirdApiKey) {
    throw new Error("MessageBird API key is not set");
  }

  if (!recaptchaSecretKey) {
    throw new Error("reCAPTCHA secret key is not set");
  }

  const userEmail = formData.get("userEmail") as string;
  const userName = formData.get("userName") as string;
  const message = formData.get("message") as string;
  const recaptchaToken = formData.get("recaptchaToken") as string;

  if (!userEmail) {
    console.error("User email missing");
    return {
      success: false,
    };
  }

  if (!userName) {
    console.error("User name missing");
    return {
      success: false,
    };
  }

  if (!message) {
    console.error("Message missing");
    return {
      success: false,
    };
  }

  if (!recaptchaToken) {
    console.error("reCAPTCHA token missing");
    return {
      success: false,
    };
  }

  // Verify reCAPTCHA token
  try {
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData);
      return {
        success: false,
      };
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return {
      success: false,
    };
  }

  // Send email using MessageBird API
  try {
    const messageBirdUrl = `https://api.bird.com/workspaces/${workspaceId}/channels/${channelId}/messages`;

    const emailPayload = {
      receiver: {
        contacts: [
          {
            identifierKey: "emailaddress",
            identifierValue: "support@mefit.pro"
          },
          {
            identifierKey: "emailaddress",
            identifierValue: userEmail,
            type: "cc"
          }
        ]
      },
      body: {
        type: "html",
        html: {
          text: message,
          html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
          metadata: {
            subject: `ME Fit Pro outreach - ${userName}`,
            headers: {
              "reply-to": userEmail
            },
            emailFrom: {
              username: "support",
              displayName: "ME Fit Pro Support"
            }
          }
        }
      }
    };

    const response = await fetch(messageBirdUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `AccessKey ${messageBirdApiKey}`
      },
      body: JSON.stringify(emailPayload)
    });

    if (response.ok) {
      return {
        success: true,
      };
    } else {
      const errorData = await response.text();
      console.error("MessageBird API error:", response.status, errorData);
      return {
        success: false,
      };
    }
  } catch (error) {
    console.error("Error sending email via MessageBird:", error);
    return {
      success: false,
    };
  }
};

export default submitContactForm;
