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

  addPlayer: (game, num) => {
// make a promise the adds a new phone# a games smsNums array
 console.log(game.id);
    return new Promise((resolve, reject) => {
      Game.findOneAndUpdate({ _id: game.id }, { $push: { smsNums: num }, $inc: { playRequests: 1 } }, (err, game) => {
        if (err) return reject(err);
        resolve(game);
      });
    });
  },
  //this is probably janked up and broken
  getGames: (res) => {
    console.log('db.getGames fired')
    return new Promise((resolve, reject) => {
      Game.find({}, (err, game) => {
        if (err) return reject(err);
        console.log('inside getGame: ', game);
        resolve(game);
      });
    });
  }
};


export default db;