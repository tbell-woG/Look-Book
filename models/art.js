const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    id: {type: Number},
    title: {type: String},
    author: {type: String},
    date: {type: Date, default: Date.now}
})

const Art = mongoose.model("Art", artSchema);

module.exports = Art;