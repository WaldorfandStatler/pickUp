import sms from '../twilio/sms';
import Game from './gameModel';
import db from '../mongoose/db';
import helpers from '../helpers';
import moment from 'moment';

export default {
  addRequest: (req, res, next) => {
    let gameReq = req.body;
    console.log(gameReq);
    let smsNum = helpers.phone(gameReq.smsNum);
    if (!smsNum) {
      return res.send(400);
    }

    let newGame = new Game({
      sport: gameReq.sport,
      startTime: gameReq.time,
      location: 'Stallings',
      minPlayers: 2,//change to 2 to stay within economic restrictions
      playRequests: 1,
      smsNums: [{smsNum: smsNum}],
    });
    // check if game exists in DB
    db.getGame(newGame)
      .then(foundGame => {
        if (foundGame) {
          console.log('game found ');
          
          if ( helpers.includesPlayer(foundGame, gameReq.smsNum) ) {
            console.error('game already requested.');
            return Promise.resolve(foundGame);
          }
          foundGame.smsNums.push({smsNum: gameReq.smsNum});
         
          foundGame.playRequests += 1
          return Promise.resolve(foundGame);
        } else {
          console.log('game not found. using newGame ');
          return Promise.resolve(newGame);
        }
      })
      .then(game => {
        // check if playRequest > minPlayer
        console.log('player Count: ', game.playRequests);
        if (helpers.hasEnoughPlayers(game)) {
          // send to all the players
          helpers.forEachPlayer(game, (num) => {
            console.log('texting ', num);
            sms.sendScheduledGame({
              smsNum: num,
              sport: gameReq.sport,
              gameLoc: 'Stallings',
              gameTime: gameReq.time
            });
          })
        }
        return Promise.resolve(game);
      })  
      .then(db.saveGame)
      .then((savedGame) => {
        res.status(201).json(savedGame);
      })
      .catch(err => {
        console.error('error saving game ', err)
        res.status(500).send('error requesting game');
      });

    
  },
  getAllGames: () => {
    console.log('get all game')
    db.getAllGames()
    .then()
    .catch(err => {
      console.error('error fetching all games ', err)
      res.status(500).send('error requesting game');
    });
  }
}