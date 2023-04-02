// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { format, parseISO } from 'date-fns';

export default function handler(req, res) {
  console.log(req.body);
  const accountSid = process.env.account_sid;
  const authToken = process.env.auth_token;
  const client = require('twilio')(accountSid, authToken);
  
  const from = process.env.twilio_number; // this is the number of the number the text message will come from; 
  const to = req.body.number; // need to pass in the number to the frontend (of the friend)

  const now = Date.now();
  
  const durationMinutes = parseInt(req.body.duration) / 60;

  console.log({from, to, now, durationMinutes});
  
  client.messages
    .create({
      from: from,
      to: to,
      body: `Hi. ${req.body.name || 'your friend'} is on their way home. They should arrive in ${durationMinutes} minutes.`
    })
    .then(message => console.log(`Message sent: ${message.sid}`))
    .catch(error => console.error(error));

  res.status(200).json({ data: []})

  setTimeout(function () {
    client.messages
  .create({
    from: from,
    to: to,
    body: `Hi, ${durationMinutes} minutes have passed but ${req.body.name || 'your friend'} has not confirmed they are home.`
  })
  .then(message => console.log(`Message sent: ${message.sid}`))
  .catch(error => console.error(error));
  }, parseInt(req.body.duration) * 1000)
}