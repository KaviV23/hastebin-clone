const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wastebin", {});


app.get('/', (req, res) => {
    const code = `Welcome to Wastebin!

Use the commands in the top right corner
to create a new file to share with other`
    res.render("code-display", {code});
})

app.get("/new", (req, res) => {
    res.render("new");
})

app.post("/save", (req, res) => {
    const value = req.body.value;
    console.log(value);
})

app.listen(3000);