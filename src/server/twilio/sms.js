import twilio from 'twilio';
import moment from 'moment';
import { TWILIO_MSG_SID, TWILIO_AUTH_TOKEN, TWILIO_SID } from '../../../config';

const client = twilio(process.env.TWILIO_SID || TWILIO_SID, process.env.TWILIO_AUTH_TOKEN || TWILIO_AUTH_TOKEN);
const sms = {
  sendScheduledGame: ({smsNum, gameLoc, gameTime, sport, id, session}) => {
    let message = `${sport} is happening @ ${gameLoc} for ${moment(gameTime).format('llll')}. You in?`;
    console.log('sending message: ', message);
    // real text
    session.id = id;
    const gameID = session.id;
    return new Promise((resolve, reject) => {
      client.messages.create({
        game: gameID,
        to: smsNum,
        messagingServiceSid: TWILIO_MSG_SID,
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