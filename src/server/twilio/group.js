import twilio from 'twilio';
import db from '../mongoose/db'
import sms from './sms'

const group = {
  handleSms: (req, res) => {
    console.log(req.body);
    const message = 'Your message is being sent to the group'
    const body = req.body.Body;
    const from = Number(req.body.From.slice(1));
    console.log(body, from);
    
    db.getGameByNum(from)
      .then(game => game.smsNums.filter(num => num !== from))
      .then(nums => {
        console.log(nums,'nums');
        nums.forEach(num => {
          sms.sendSmsFromUser(num, body);
        })
        return Promise.resolve(nums);
      })
      .then(() => {
        var twiml = new twilio.TwimlResponse();
        twiml.message(function () {
          this.body(message);
        });
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
      })
      .catch(err => console.error(err));    
  }
};



export default group;
 



