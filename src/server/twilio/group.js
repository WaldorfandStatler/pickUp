import twilio from 'twilio';



const group = {
  handleSms: (req, res) => {
    console.log(req.body);
    
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    twiml.message(function () {
      this.body('The Robots are coming! Head for the hills!');
      this.media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');
    });
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  }
};



export default group;
 



