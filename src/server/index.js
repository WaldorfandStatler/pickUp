import app from './server';

const port = process.env.PORT || 1337;


app.listen(port, () => {
  console.log(`pickUp listening on port: ${port}!`);
});

