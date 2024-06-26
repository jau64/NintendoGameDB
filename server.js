const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let games = []; // Replace with the database next module.

app.get('/api/games', (req, res) => {
  res.json(games);
});


app.post('/api/games', (req, res) => {
  const game = { id: Date.now(), ...req.body }; //Using current timestamp as a unique identifier.
  games.push(game);
  res.status(201).json(game);
});

app.delete('/api/games/:id', (req, res) => {
  games = games.filter(game => game.id !== parseInt(req.params.id));
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
