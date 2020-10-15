const express = require("express");
const app = express.Router();
const db = require("../controller/dbController");

//Add GET Routes
app.get("/notes", (req, res) => {
    const id = req.query.id;
    if (id) {
        const result = db.getOne(id);
        res.render("notes", { result: result });
    } else {
        const result = db.get();
        res.render("notes", { result: result });
    }
});

module.exports = app;
