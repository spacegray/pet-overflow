const express = require("express");
const { Op } = require('sequelize');
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { Question } = db;
const router = express.Router();

router.post('/search', asyncHandler(async (req,res) => {
    console.log('\nHELLO FROM SEARCH\n');
    const searchTerm = req.body.search;
    console.log('SEARCH TERM: ', searchTerm);
    const searchResults = await Question.findAll({
        where: {
            title: {
                [Op.substring]: searchTerm
            }
        }
    });
    Object.values(searchResults).forEach(result => console.log(result.id, result.title));
}));

module.exports = router;
