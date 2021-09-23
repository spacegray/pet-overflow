const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const answer = require("../db/models/answer");
const { Question } = db;
const { Answer } = db;
const router = express.Router();
const {
  loginUser,
  logoutUser
} = require("../auth");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll();
    res.render("questions", { questions });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId);
    const answers = await Answer.findAll({ where: { questionId } });
    console.log(answers);
    question.views++;
    question.save();
    res.render("questionsContent", { question, questionId, answers });
  })
);

router.get(
  "/ask",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("questionForm", { csrfToken: req.csrfToken() });
  })
);

router.post(
  "/ask",
  asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const { userId } = req.session.auth;
    await Question.create({
      title,
      content,
      userId,
    });
    res.redirect("/questions");
  })
);

router.get(
  "/demo",
  asyncHandler(async (req, res) => {
    const user = await db.User.findByPk(1);
    console.log(user);
    loginUser(req, res, user);
    const questions = await db.Question.findAll();
    res.render("questions", { questions });
  })
);
module.exports = router;
