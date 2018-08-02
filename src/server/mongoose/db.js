import Game from '../games/gameModel';

const db = {
  saveGame: (game) => {
    return new Promise ((resolve, reject) => {
      game.save((err, game) => {
        if (err) return reject(err);
        resolve(game);
      });
    });
  },

  getGame: (game) => {
    return new Promise((resolve, reject) => {
      Game.findOne({
        sport: game.sport,
        startTime: game.startTime,
      }, (err, game) => {
        if (err) return reject(err);
        resolve(game);
      });
    });
  },

  addPlayer: (game, user) => {
// make a promise the adds a new phone# a games smsNums array
 console.log(game, user);
 return game;
  //   return new Promise((resolve, reject) => {
  //     game.(    (err, game) => {
  //       if (err) return reject(err);
  //       resolve(game);
  //     });
  //   });
  },

};


export default db;