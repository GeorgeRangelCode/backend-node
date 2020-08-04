const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({});

const model = mongoose.model("chat", mySchema);

module.exports = model;
