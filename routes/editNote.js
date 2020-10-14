const express = require("express");
const app = express.Router();
const db = require("../controller/dbController");

//Adding PATCH Route
app.patch("/notes", (req, res) => {
    const body = req.body;
    const id = db.parsedId(req.query.id);
    const dbId = db.dbId();
    if (dbId.includes(id)) {
        db.editPost(body, id);
        res.send(body);
    } else {
        res.status(404).send(`You cannot edit the notes with id number ${id} because it doesn't exist!`);
    }
});

module.exports = app;
