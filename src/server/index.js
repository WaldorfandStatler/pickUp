import app from './server';

const port = process.eventNames.PORT || 1337;


app.listen(port, () => {
  console.log(`pickUp listening on port: ${port}!`);
});

