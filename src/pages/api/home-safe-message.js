// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.body);
  const accountSid = process.env.account_sid;
  const authToken = process.env.auth_token;
  const client = require('twilio')(accountSid, authToken);
  
  const from = process.env.twilio_number; // this is the number of the number the text message will come from; 
  const to = req.body.number; // need to pass in the number to the frontend (of the friend)
  
  client.messages
    .create({
      from: from,
      to: to,
      body: `${req.body.name || 'your friend'} is home safe!`
    })
    .then(message => console.log(`Message sent: ${message.sid}`))
    .catch(error => console.error(error));

    // schedule message here 

  res.status(200).json({ data: []})
}
