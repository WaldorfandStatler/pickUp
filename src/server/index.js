import app from './server';

const port = 1337;


app.listen(port, () => {
  console.log(`pickUp listening on port: ${port}!`);
});

