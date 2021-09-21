const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require("../auth");
const router = express.Router();

// LIST USERS
router.get('/', asyncHandler(async (req,res) => {
    console.log('hello from user router');
    const users = await db.User.findAll({
        attributes: ['userName', 'email']
    });
    users.forEach(user => console.log(user.userName, user.email));
    res.send('hi');
}));

// USER INFO
router.get('/:id(\\d+)', asyncHandler(async (req,res) => {
    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);

    // WE WILL LATER CHECK PERSMISSIONS DURING AUTHORIZATION PHASE
    // checkPermissions(book, res.locals.user);

    res.render('user-id', {user,});
}));

// REGISTER
router.post('/register', asyncHandler(async (req,res) => {
    const { userName, email, password } = req.body;
    const user = db.User.build({
        userName,
        email,
        password,
    });
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
}));

// LOGIN
router.post('/login', asyncHandler(async (req,res) => {
    const { email, password } = req.body;
    const user = await db.User.findOne({where: {email}});
    const passwordMatch = await bcrypt.compare(
        password,
        user.hashedPassword.toString(),
    );
    if (passwordMatch) {
        // loginUser(req,res,user);
        console.log(`hello ${user.userName}, ${user.email} from LOGIN ROUTE`);
        loginUser(req, res, user);
    } else {
        console.log(`Login unsuccessful`);
    }
}));

module.exports = router;
