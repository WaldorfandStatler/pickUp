import mongoose from 'mongoose';
import { MONGO_URI } from '../../../config';

// mongoose.connect(process.env.MONGO_URI);
mongoose.connect(MONGO_URI);
const db = mongoose.connection;

// console.log('MONGO_URI: ', process.env.MONGO_URI);
// console.log('PORT: ', process.env.PORT);

console.log('MONGO_URI: ', MONGO_URI);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('And we\'re in!!!');
});

export default db;