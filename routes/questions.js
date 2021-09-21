const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router();

router.get('/', asyncHandler(async (req,res) => {
    const users = await db.User.findAll({
        attributes: ['userName']
    });
    //res.json({ users });
    res.send("hi")
}));


module.exports = router;