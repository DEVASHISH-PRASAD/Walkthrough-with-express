const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "I am HomePage" });
});

app.get("/about", (req, res) => {
  res.json({ msg: "I am AboutPage" });
});

app.get("/contact", (req, res) => {
  res.json({ email: "support@pwskills.com" });
});

const port = 3434;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
