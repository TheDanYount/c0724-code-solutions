import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(
    `The date is ${new Date()} the method is ${req.method}; the path is ${
      req.path
    }`
  );
  next();
});

app.get('/', (req, res, next) => {
  res.send('second middleware reached');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send("Note: don't give up!");
  next();
});

app.post('/notes/123', (req, res, next) => {
  res.send('A note should have been added to the database');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
