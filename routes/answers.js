const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const answer = require("../db/models/answer");
const { Answer } = db;
const router = express.Router();

router.post(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { content } = req.body;
    const { userId } = req.session.auth;
    const questionId = parseInt(req.params.id, 10);
    const votes = 0;
    const views = 0;

    await Answer.create({
      questionId,
      content,
      userId,
      votes,
      views,
    });
    res.redirect(`/questions/${questionId}`);
  })
);

router.get(
  "/:id(\\d+)/answer",
  asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    res.render("answer-form", { questionId });
  })
);

// const questions = await db.Question.findAll();
// res.render("questions", { questions });

module.exports = router;
