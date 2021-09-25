const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const answer = require("../db/models/answer");
const { Answer } = db;
const router = express.Router();
const { check, validationResult } = require("express-validator");

const answerValidators = [
    check("content")
    .exists({
        checkFalsy: true
    })
    .withMessage("You need to type something, jabroni.")
];

router.post(
    "/:id(\\d+)",
    requireAuth,
    answerValidators,
    asyncHandler(async (req, res) => {
        const { content } = req.body;
        const { userId } = req.session.auth;
        const questionId = parseInt(req.params.id, 10);
        const question = await db.Question.findByPk(questionId);
        const answers = await Answer.findAll({ where: { questionId } });

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const votes = 0;
            const views = 0;
            await Answer.create({
                questionId,
                content,
                userId,
                votes,
                views,
            });
            return req.session.save(() => res.redirect(`/questions/${questionId}`));
        }

        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('questionsContent', {
            errors,
            question,
            answers,
            questionId
        });
    })
);

module.exports = router;
