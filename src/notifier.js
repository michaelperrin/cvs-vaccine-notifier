import twilio from 'twilio';

const sendNotification = (message) => {
  const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    PHONE_NUMBER_FROM,
    PHONE_NUMBER_TO,
  } = process.env;

  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  client.messages
    .create({
      body: message,
      from: PHONE_NUMBER_FROM,
      to: PHONE_NUMBER_TO,
    });
}

export default sendNotification;
