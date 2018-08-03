import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';

import gameController from './games/gameController';
import group from './twilio/group';
import db from './mongoose/dbConnect';

const app = express();

let clientDir = path.join(__dirname, '../../src/client')

app.use(morgan('dev'));
app.use(session({ secret: 'anything-you-want-but-keep-secret' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(clientDir));

app.post('/api/games', gameController.addRequest);

//Added route to receive all games from the database
//getAllGames is not written yet
app.get('/api/games', gameController.getAllGames);
app.get('api/search', gameController.findField );

app.post('/sms', group.handleSms);
// app.post('/sms', (req, res) => {
//   console.log('sms');
//   res.send('wow');
  
// })

console.log(`client directory: ${clientDir}`)

export default app;