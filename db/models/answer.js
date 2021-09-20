'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    votes: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
      Answer.belongsTo(models.User, {foreignKey: 'userId'});
      Answer.belongsTo(models.Question, {foreignKey: 'questionId'});
  };
  return Answer;
};
