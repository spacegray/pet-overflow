'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
      Question.belongsTo(models.User, {foreignKey: 'userId'});
      Question.hasMany(models.Answer, {foreignKey: 'questionId'});
  };
  return Question;
};
