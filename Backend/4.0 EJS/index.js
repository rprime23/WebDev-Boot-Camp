import express from "express";

const app = express();
const port = 3000;

const today = new Date();
const dayOfTheWeek = today.getDay();

var phrase = "";

if (dayOfTheWeek == 0 || dayOfTheWeek == 6)
{
    phrase = "the weekend, it's time to have fun!";
}
else 
{
    phrase = "a weekday, it's time to work hard!";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {phrase: phrase});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});