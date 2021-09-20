const { asyncHandler } = require('./utils');
const express = require('express');
const router = express.Router();
const db = require('../db/models');

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
    console.log('hello from user router');
    const users = await db.User.findAll({
        attributes: ['userName', 'email']
    });
    users.forEach(user => console.log(user.userName, user.email));
    res.send('hi');
}));

module.exports = router;
