const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId: {type: String, required: true, unique: true},
    redirectURL: {type: String, required: true},
    visitHistory: [{timeStamp: {type: Number}}]
}, {timestamps: true})

module.exports = mongoose.model('urls', urlSchema);