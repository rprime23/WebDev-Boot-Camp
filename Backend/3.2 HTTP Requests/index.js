import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>HOME</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2 style=\"color:red;\">about</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h3 style=\"color:green;\">CoNtAcT</h3>");
})

app.listen(port, () => {
    console.log("Server Running")
});