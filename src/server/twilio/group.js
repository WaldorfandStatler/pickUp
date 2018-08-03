import twilio from 'twilio';



const group = {
  handleSms: (req, res) => {
    const smsCount = req.session.counter || 0;

    let message = 'Hello, thanks for the new message.';

    if (smsCount > 0) {
      message = 'Hello, thanks for message number ' + (smsCount + 1);
    }

    req.session.counter = smsCount + 1;

    var twiml = new twilio.TwimlResponse();
    twiml.message(message);
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  }
};



export default group;
 



