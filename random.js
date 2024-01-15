const express = require("express");
const app = express();
const randomNumber = function () {
  return Math.ceil(Math.random(2) * 100);
};

app.get("/random", (req, res) => {
  res.json({ Random_Number: randomNumber() });
});

const port = 6111;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
