// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const accountSid = process.env.account_sid;
  const authToken = process.env.auth_token;
  const client = require('twilio')(accountSid, authToken);
  
  const from = process.env.twilio_number; // this is the number of the number the text message will come from; 
  const to = customer.number; // need to pass in the number to the frontend (of the friend)

  const now = Date.now();

  const time = req.body.time + now;

  console.log(from, to, now, time);
  
  client.messages
    .create({
      from: from,
      to: to,
      body: `Hi. ${req.body.name || 'your friend'} is on their way home. They should arrive at ${time}.`
    })
    .then(message => console.log(`Message sent: ${message.sid}`))
    .catch(error => console.error(error));

  res.status(200).json({ name: 'John Doe' })
}
