const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const { Answer } = db;
const { Question } = db;
const { Vote } = db;
const router = express.Router();

router.post(
    "/questions/:id(\\d+)/vote",
    asyncHandler(async (req, res) => {
        const { userId } = req.session.auth;
        const questionId = parseInt(req.params.id, 10);
        const hasVoted = await Vote.findOne({
            where: { userId, questionId }
        });
        if (!hasVoted) {
            console.log(`VOTING FOR QUESTION ${questionId}`);
            const question = await Question.findByPk(questionId);
            await Vote.create({
                userId,
                questionId
            });
            question.votes++;
            question.save();
            return req.session.save( () =>
                res.redirect(`/questions/${questionId}`));
        }
        console.log('\nYOU ALREADY VOTED\n');
        res.redirect(`/questions/${questionId}`);
    })
);

router.post(
    "/answers/:id(\\d+)/vote",
    asyncHandler(async (req, res) => {
        if (!req.session.vote) {
            const { userId } = req.session.auth;
            const answerId = parseInt(req.params.id, 10);
            const answer = await Answer.findByPk(answerId);
            answer.votes++;
            answer.save();
            res.redirect(`/questions/${questionId}`);
        }
    })
);

module.exports = router;
