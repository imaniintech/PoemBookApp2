const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    tags: {type: String}, 
    content: {type: String, required: true}, 
    createDate: {type: Date, default: Date.now}
});


module.exports = mongoose.model("Poem", poemSchema)