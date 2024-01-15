const express = require("express");
const prompt = require("prompt-sync");
const app = express();

const menProducts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Men Product ${index + 1}`,
}));
const womenProduct = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Women Product ${index + 1}`,
}));

app.get("/", (req, res) => {
  res.send("Welcome to Men and Women Dummy data");
});

app.get("/men", (req, res) => {
  res.json(menProducts);
});

app.get("/women", (req, res) => {
  res.json(womenProduct);
});

app.use((req, res) => res.status(404).send("page not found"));

const port = 4327;
app.listen(port, () => {
  console.log("APPLICATION IS RUNNING ON PORT NUMBER", port);
});
