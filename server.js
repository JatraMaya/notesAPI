//Preparing all the necessary dependancies
const express = require("express");
const bodyParser = require("body-parser");
const getNotes = require("./routes/getNotes");
const addNote = require("./routes/addNotes");
const deleteNote = require("./routes/deleteNote");
const editNote = require("./routes/editNote");

//Initialize server app
const app = express();
app.use(bodyParser.json());
app.use(getNotes);
app.use(addNote);
app.use(deleteNote);
app.use(editNote);

//Initialize Pug
app.set("views", "./views");
app.set("view engine", "pug");

//Adding basic get route
app.get("/", (req, res) => {
    res.render('index', {title: "Render Using PUG", message: "Hello World"})
});

//Setting up port
const port = 3001;

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`);
});
