const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require("./utils");
const { Question } = db;
const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll();
    res.render("questions", { questions });
  })
);

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await Question.findByPk(questionId);
    question.views++;
    question.save();
    res.render("questionsContent", { question });
  })
);

router.get("/newQuestion", csrfProtection, asyncHandler(async (req, res) => {
    res.render("questionForm", {csrfToken: req.csrfToken()});
  })
);

router.post("/newQuestion", asyncHandler(async (req, res) => {
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

module.exports = router;
