const express = require("express");
const app = express.Router();
const db = require("../controller/dbController");

//Adding POST Route
app.post("/notes", (req, res) => {
    const body = req.body;
    const id = db.parsedId(body.id);
    const dbId = db.dbId();
    if (!dbId.includes(id)) {
        db.postNote(body);
        res.send("Succesfully write a new note");
    } else {
        res.status(409).send("Cannot input notes with duplicate id");
    }
});

module.exports = app;
