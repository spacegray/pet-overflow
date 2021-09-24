const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const answer = require("../db/models/answer");
const { Question } = db;
const { Answer } = db;
const router = express.Router();
const { loginUser, logoutUser } = require("../auth");
const { check, validationResult } = require("express-validator");

const questionValidators = [
    check("title")
    .exists({
        checkFalsy: true
    })
    .withMessage("You need to provide a question title"),
    check("content")
    .exists({
        checkFalsy: true
    })
    .withMessage("You need to type something, jabroni."),
];

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const questions = await db.Question.findAll();
        res.render("questions", {
            questions
        });
    })
);

router.get(
    "/:id(\\d+)",
    asyncHandler(async (req, res) => {
        const questionId = parseInt(req.params.id, 10);
        const question = await Question.findByPk(questionId);
        const answers = await Answer.findAll({
            where: {
                questionId
            }
        });
        console.log(answers);
        question.views++;
        question.save();
        res.render("questionsContent", {
            question,
            questionId,
            answers
        });
    })
);

router.get(
    "/ask",
    requireAuth,
    csrfProtection,
    asyncHandler(async (req, res) => {
        res.render("questionForm", {
            csrfToken: req.csrfToken()
        });
    })
);

router.post(
    "/ask",
    questionValidators,
    asyncHandler(async (req, res) => {
        const { title, content } = req.body;
        const { userId } = req.session.auth;

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await Question.create({
                title,
                content,
                userId,
            });
            return req.session.save(() => res.redirect("/questions"));
        }
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('questionForm', {
            errors,
        });
    })
);

router.get(
    "/demo",
    asyncHandler(async (req, res) => {
        const user = await db.User.findByPk(1);
        console.log(user);
        loginUser(req, res, user);
        const questions = await db.Question.findAll();
        res.render("questions", {
            questions
        });
    })
);
module.exports = router;
