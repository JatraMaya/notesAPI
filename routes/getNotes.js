const express = require("express");
const app = express.Router();
const db = require("../controller/dbController");

//Add GET Routes
app.get("/notes", (req, res) => {
    const result = db.get();
    res.render('notes',{result: result})
});

module.exports = app;
