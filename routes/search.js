const express = require("express");
const { Op, sequelize } = require('sequelize');
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { Question } = db;
const router = express.Router();

router.post('/search', asyncHandler(async (req, res) => {
    console.log('\nHELLO FROM SEARCH\n');
    const searchTerm = req.body.search;
    console.log('SEARCH TERM:', searchTerm);

    // Query database, order by number of views
    const searchResults = await Question.findAll({
        where: {
            title: {
                [Op.substring]: searchTerm
            }
        },
        order: [
            ['views', 'DESC']
        ],
    });

    // Logging question results
    Object.values(searchResults).forEach(result => {
        console.log(result.id, result.title);
    });

    // Why is this not rendering pug?
    res.render("questions", {questions: searchResults});
}));

module.exports = router;
