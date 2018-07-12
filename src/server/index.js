import express from 'express';
import render from './render';

const app = express();

app.get('/', render);
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(8000, () => console.log('App Listening at Port 8000'));