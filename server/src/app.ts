import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log('server is running!');
});
