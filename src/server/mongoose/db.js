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

};


export default db;