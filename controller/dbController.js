//Preparing lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

//Setting up db.json
const adapter = new FileSync("db.json");
const db = low(adapter);

//Setting lowdb defaults
db.defaults({
    notes: [],
}).write();

//Declaring get Function
function get() {
    return db.get("notes").value();
}

//Declaring function parsedId
function parsedId(id) {
    const parsed = parseInt(id);
    return parsed;
}

//Declaring function dbId
function dbId() {
    return db
        .get("notes")
        .map("id")
        .value();
}

//Declaring function post
function postNote(body) {
    db.get("notes")
        .push(body)
        .write();
}

//Declaring function delete
function deletePost(id) {
    db.get("notes")
        .remove({ id: id })
        .write();
}

//Declaring function edit
function editPost(body, id) {
    db.get("notes")
        .find({ id: id })
        .assign(body)
        .write();
}

module.exports = { get, parsedId, dbId, postNote, deletePost, editPost };
