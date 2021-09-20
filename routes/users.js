const { asyncHandler } = require('./utils');
const express = require('express');
const { loginUser, logoutUser } = require("../auth");
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

router.post('/login', asyncHandler(async (req,res,next) => {
    const { email, password } = req.body;
    const user = await db.User.findOne({where: {email}});
    const passwordMatch = password === user.hashedPassword;
    if (passwordMatch) {
        loginUser(req,res,user);
        console.log(`hello ${user.userName}, ${user.email} from LOGIN ROUTE`);
        return res.redirect('/');
    } else {
        console.log(`Login unsuccessful`);
    }
}));



module.exports = router;
