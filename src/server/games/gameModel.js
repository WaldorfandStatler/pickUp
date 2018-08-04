import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  sport: 'string',
  startTime: { type: Date },
  location: 'string',
  minPlayers: 'Number',
  playRequests: 'Number',
  smsNums: [Number]
});

const Game = mongoose.model('Game', gameSchema);

export default Game;