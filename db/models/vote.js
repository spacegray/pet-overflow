'use strict';
module.exports = (sequelize, DataTypes) => {
    const Vote = sequelize.define('Vote', {
        userId: DataTypes.INTEGER,
        questionId: DataTypes.INTEGER,
        answerId: DataTypes.INTEGER,
        voteType: DataTypes.INTEGER
    }, {});
    Vote.associate = function(models) {
        Vote.belongsTo(models.User, {
            foreignKey: 'userId'
        });
        Vote.belongsTo(models.Answer, {
            foreignKey: 'answerId'
        });
        Vote.belongsTo(models.Question, {
            foreignKey: 'questionId'
        });
    };
    return Vote;
};
