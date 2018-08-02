import mongoose from 'mongoose';
import userSchema from '../users/userSchema';

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