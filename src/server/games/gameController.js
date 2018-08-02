import sms from '../twilio/sms';
import Game from './gameModel';
import db from '../mongoose/db';
import helpers from '../helpers';
import moment from 'moment';

export default {
  addRequest: (req, res, next) => {
    let gameReq = req.body;
    console.log(gameReq);
    let smsNum = helpers.phone(gameReq.smsNum);//phone is a module the properly formats the number
    if (!smsNum) {
      return res.send(400);
    }

    let newGame = new Game({
      sport: gameReq.sport,
      startTime: gameReq.time,
      location: 'Stallings',
      minPlayers: 2,//change to 2 to stay within economic restrictions
      playRequests: 1,
      smsNums: [smsNum],
    });
    // check if game exists in DB
    db.getGame(newGame)
      .then(foundGame => {
        if (foundGame) {
          console.log('game found ');
          
          if ( helpers.includesPlayer(foundGame, gameReq.smsNum) ) {
            console.error('game already requested.');
            return Promise.resolve(foundGame);
          } else {
            
            // foundGame.smsNums.push(gameReq.smsNum)
            // foundGame.playRequests += 1
            // foundGame.save((err) => {
            //   if (err)  console.error(err);
            //   return;
            // });
            return db.addPlayer(foundGame, gameReq.smsNum)
            // return Promise.resolve(foundGame)
          }
        } else {
          console.log('game not found. using newGame ');
          return Promise.resolve(newGame)
            .then(game => {//this should go inside if else chain for found game
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
            .then(db.saveGame);//save for new game
        }
      })
      .then((savedGame) => {
        res.status(201).json(savedGame);
      })
      .catch(err => {
        console.error('error saving game ', err)
        res.status(500).send('error requesting game');
      });

    
  }
}