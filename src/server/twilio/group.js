import twilio from 'twilio';



const group = {
  handleSms: (req, res) => {
    console.log(req.body);
    var smsCount = req.session.counter || 0;

    var message = 'Hello, thanks for the new message.';
    if (smsCount > 0) {
      message = 'Hello, thanks for message number ' + (smsCount + 1);
    }

    req.session.counter = smsCount + 1;
    console.log(req.session);
    
    var twiml = new twilio.TwimlResponse();
    twiml.message(function () {
      this.body(req.body.Body);
    });
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  }
};



export default group;
 



