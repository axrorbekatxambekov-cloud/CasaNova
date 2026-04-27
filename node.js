const express = require('express');
const app = express();

app.use(express.json());

app.post('/buy', (req, res) => {
  const { userId, game, amount } = req.body;

  console.log("New order:", userId, game, amount);

  res.send({ status: "ok" });
});

app.listen(3000, () => console.log("Server running"));