import moment from 'moment';
import phone from 'phone';

const helpers = {
  createGameTime: (reqTime) => {
    // works for TODAY
    let gameTime = new Date(
      moment().get('year'),
      moment().get('month'),
      moment().get('date'),
      parseInt(reqTime)
    );
    return gameTime;
  },
  // using === instead of >= to avoid multiple texts 
  // put texted flag on each player 
  hasEnoughPlayers: game => game.playRequests === game.minPlayers,

  includesPlayer: (game, smsNum) => {
    for (let i = 0; i < game.smsNums.length; i++) {
      if (game.smsNums[i] == smsNum) {
        return true;
      } else {
        return false;
      }
    }
  },

  forEachPlayer: (game, cb) => {
    game.smsNums.forEach(num => {
      cb(num);
    });
  },

  phone: num => phone(num)[0],

};

export default helpers;