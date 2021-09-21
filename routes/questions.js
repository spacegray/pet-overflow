const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { asyncHandler } = require('./utils');
const { Question } = db;
const router = express.Router();

router.get('/', asyncHandler(async (req,res) => {
    const questions = await db.Question.findAll();
    res.render("questions", { questions })
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    //const questionId = parseInt(req.params.id, 10);
    // const questions = await Question.findByPk(req.params.id);
  const questions = await Question.findAll({
    where: { id: req.params.id }
  });
    res.render("questionsContent", { questions });
  })
);



module.exports = router;