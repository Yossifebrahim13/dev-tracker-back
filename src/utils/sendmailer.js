require("dotenv").config();
const SibApiV3Sdk = require('sib-api-v3-sdk');

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications['api-key'].apiKey = process.env.SMTP_PASS;

const sendMail = async (to, subject, html) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = {
    to: [{ email: to }],
    sender: { email: process.env.FROM_EMAIL },
    subject,
    htmlContent: html,
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent:", data);
    return data;
  } catch (err) {
    console.error("Email API error:", err);
    throw err;
  }
};

module.exports = sendMail;
