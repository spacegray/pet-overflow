const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { Question } = db;
const router = express.Router();

router.post('/search', asyncHandler(async (res,req) => {
    console.log('\n\nHELLO FROM SEARCH\n\n');
}));

module.exports = router;
