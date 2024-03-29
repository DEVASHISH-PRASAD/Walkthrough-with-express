const express = require("express");
const app = express();

let counter = 0;

app.get("/", (req, res) => {
  res.json({ counter });
});

app.get("/increment", (req, res) => {
  counter++;
  res.json({ counter });
});

app.get("/decrement", (req, res) => {
  counter--;
  res.json({ counter });
});

const port = 3010;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
