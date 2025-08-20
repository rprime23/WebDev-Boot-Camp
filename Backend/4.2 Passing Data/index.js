import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  let header = "Enter your name below";

  res.render("index.ejs", {header: header});
});

app.post("/submit", (req, res) => {
  let header = "";

  let letters = req.body.fName.length + req.body.lName.length;

  header = "There are " + letters + " letters in your name.";

  res.render("index.ejs", {header: header});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
