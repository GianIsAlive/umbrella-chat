const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiai = require('apiai');

const app = express();
const umbrellaApp = apiai('1d6e6f4f21e64b4a8ae31b112fc61218');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/questions', (req, res) => {
  const request = umbrellaApp.textRequest('I have a sore throat', { sessionId: '1234' });
  console.log('hello');
  request.on('response', function(response) {
    console.log('This is response: ', response);
    res.end();
  });
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/dist/style/img', express.static(path.join(__dirname, '../dist/img')));
app.use('/img', express.static(path.join(__dirname, '../dist/img')));

const PORT = 5000;

app.listen(PORT, () => {
  console.log('You are listening on: ', PORT);
});
