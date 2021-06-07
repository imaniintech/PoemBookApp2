// DEPENDENCIES
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const methodOverride = require('method-override');

// METHOD OVERRIDE
router.use(methodOverride('_method'));

// MODEL
const Poem = require('../models/poems');


// // INDEX
// router.get("/", (req, res) => {
//     res.send('index.ejs')
//     Poem.find({}, (error, allPoems) => {
//         if (error) {
//             res.send(error)
//         } else {
//             res.render("index.ejs", {
//                 poems: allPoems
//             });
//         };
//     });
// });

router.




module.exports = router;