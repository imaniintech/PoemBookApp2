const mongoose = require("mongoose")

const poemSchema = new mongoose.Schema({
    name: {type: String, require: true},
    tag: String,
    img: String,
    content: {type: String, require: true},
})

const Poem = mongoose.model("Poem", poemSchema)

module.exports = Poem