const express = require("express");
const app = express.Router();
const db = require("../controller/dbController");

//Adding DELETE Route
app.delete("/notes", (req, res) => {
    const query = req.query;
    const id = db.parsedId(query.id);
    const dbId = db.dbId();
    if (dbId.includes(id)) {
        db.deletePost(id);
        res.send("Succesfully remove notes");
    } else {
        res.status(404).send("The note you request to delete doesn't exist in the database");
    }
});

app.delete("notes/all", (req, res) => {
    db.deleteAll();
    res.send("Success delete all post")
});

module.exports = app;
