const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    longUrl: String,
    shortUrl: String
}, { timestamps: true });

const DataModel = mongoose.model('urls', urlSchema);

module.exports = DataModel;