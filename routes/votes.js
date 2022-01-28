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
    requireAuth,
    asyncHandler(async (req, res) => {
        const voteType = true;
        const { userId } = req.session.auth;
        const questionId = parseInt(req.params.id, 10);
        const question = await Question.findByPk(questionId);
        const hasVoted = await Vote.findOne({
            where: { userId, questionId }
        });
        if (!hasVoted) {
            console.log(`VOTING FOR QUESTION ${questionId}`);
            await Vote.create({
                userId,
                questionId,
                voteType,
            });
            question.votes++;
            question.save();
        } else if (hasVoted && !hasVoted.voteType) {
            console.log(hasVoted);
            question.votes += 1;
            hasVoted.voteType = true;
            hasVoted.save();
            question.save();
        } else {
            console.log(`\nUSER ${userId} ALREADY VOTED\n`);
        }
        res.status(200).json({
            question
        });
    })
);

router.post(
    "/questions/:id(\\d+)/downvote",
    requireAuth,
    asyncHandler(async (req, res) => {
        const voteType = false;
        const { userId } = req.session.auth;
        const questionId = parseInt(req.params.id, 10);
        const hasVoted = await Vote.findOne({
            where: { userId, questionId }
        });
        const question = await Question.findByPk(questionId);
        if (!hasVoted) {
            await Vote.create({
                userId,
                questionId,
                voteType,
            });
            question.votes--;
            question.save();
        } else if (hasVoted.voteType) {
            question.votes -= 1;
            hasVoted.voteType = false;
            hasVoted.save();
            question.save();
        } else {
            console.log(`\nUSER ${userId} ALREADY VOTED\n`);
        }
        res.status(200).json({
            question
        });
        console.log('\nYOU ALREADY DOWNVOTED\n');
    })
);

router.post(
    "/answer/:id(\\d+)/vote",
    requireAuth,
    asyncHandler(async (req, res) => {
        const voteType = true;
        const { userId } = req.session.auth;
        const answerId = parseInt(req.params.id, 10);
        const answer = await Answer.findByPk(answerId);
        const hasVoted = await Vote.findOne({
            where: { userId, answerId }
        });
        if (!hasVoted) {
            console.log(`VOTING FOR ANSWER ${answerId}`);
            await Vote.create({
                userId,
                answerId,
                voteType,
            });
            answer.votes++;
            answer.save();
        } else if (hasVoted && !hasVoted.voteType) {
            console.log(hasVoted);
            answer.votes += 1;
            hasVoted.voteType = true;
            hasVoted.save();
            answer.save();
        } else {
            console.log(`\nUSER ${userId} ALREADY VOTED\n`);
        }
        res.status(200).json({
            answer
        });
    })
);

router.post(
    "/answer/:id(\\d+)/downvote",
    requireAuth,
    asyncHandler(async (req, res) => {
        const voteType = false;
        const { userId } = req.session.auth;
        const answerId = parseInt(req.params.id, 10);
        const hasVoted = await Vote.findOne({
            where: { userId, answerId }
        });
        const answer = await Answer.findByPk(answerId);
        if (!hasVoted) {
            await Vote.create({
                userId,
                answerId,
                voteType,
            });
            answer.votes--;
            answer.save();
        } else if (hasVoted.voteType) {
            answer.votes -= 1;
            hasVoted.voteType = false;
            hasVoted.save();
            answer.save();
        } else {
            console.log(`\nUSER ${userId} ALREADY VOTED\n`);
        }
        res.status(200).json({
            answer
        });
        console.log('\nYOU ALREADY DOWNVOTED\n');
    })
);

module.exports = router;
