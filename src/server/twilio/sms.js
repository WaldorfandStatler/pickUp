import twilio from 'twilio';
import moment from 'moment';
// import { TWILIO_NUM, TWILIO_AUTH_TOKEN, TWILIO_SID } from '../../../config';

const client = twilio(process.env.TWILIO_SID || TWILIO_SID, process.env.TWILIO_AUTH_TOKEN || TWILIO_AUTH_TOKEN);
const sms = {
  sendScheduledGame: ({smsNum, gameLoc, gameTime, sport}) => {
    let message = `we're playing ${sport} @ ${gameLoc} for ${moment(gameTime).format('llll')}. You in?`;
    console.log('sending message: ', message);
    // real text
    return new Promise((resolve, reject) => {
      client.sendMessage({
        to: smsNum,
        from: process.env.TWILIO_NUM || TWILIO_NUM,
        body: message
      }, (err, resp) => {
        if (err) {
          console.error('Error sending SMS: ', err);
          reject(err);
        } else {
          console.log(resp);
          resolve(resp);
        }
      });
    });
  },


};

export default sms;