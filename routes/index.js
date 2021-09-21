var express = require('express');
var router = express.Router();
const db = require('../db/models')

/* GET home page. */
router.get('/', async function(req, res) {
     const user = await db.User.findAll({
        attributes: ['userName', 'email']
    });
  res.render('index');
});

module.exports = router;
