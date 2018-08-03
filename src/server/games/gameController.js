import sms from '../twilio/sms';
import Game from './gameModel';
import db from '../mongoose/db';
import helpers from '../helpers';
import moment from 'moment';

export default {
  addRequest: (req, res, next) => {
    let gameReq = req.body;
    console.log(gameReq);
    let smsNum = helpers.phone(gameReq.smsNum);//phone is a module the properly formats the number for twillo, puts a 1 to the front of number
    if (!smsNum) {
      return res.send(400);
    }

    let newGame = new Game({
      sport: gameReq.sport,
      startTime: gameReq.time,
      location: gameReq.location,
      minPlayers: 2,//change to 2 to stay within economic restrictions
      playRequests: 1,
      smsNums: [smsNum],
    });
    // check if game exists in DB
    db.getGame(newGame)
      .then(foundGame => {
        if (foundGame) {
          console.log('game found ');
          if (helpers.includesPlayer(foundGame, smsNum) === true) {
            console.error('game already requested.');
            return Promise.resolve(foundGame);
          } else {
              db.addPlayer(foundGame, smsNum)
              .then(game => {//this should go inside if else chain for found game
                // check if playRequest > minPlayer
                console.log('player Count: ', game.playRequests);
                if (helpers.hasEnoughPlayers(game)) {
                  // send to all the players
                  helpers.forEachPlayer(game, (num) => {
                    console.log(game);
                    console.log('texting ', num);
                    sms.sendScheduledGame({
                      smsNum: num,
                      sport: gameReq.sport,
                      gameLoc: gameReq.location,
                      gameTime: gameReq.time
                    });
                  })
                }
                return Promise.resolve(game);
              })  
          }
        } else {
          console.log('game not found. using newGame ');
          return Promise.resolve(newGame)
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

    
  },

  getAllGames: (req, res, next) => {
    console.log('get all games fired')
    db.getGames()
    .then( (data) =>{
      console.log("getGames", data);
      res.send(data);
      // return data;
      return Promise.resolve(data);
    })
    .catch(err => {
      console.error('error fetching all games ', err)
      res.status(500).send('error requesting game');
    });
  }
}