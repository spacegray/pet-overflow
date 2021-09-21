'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
return queryInterface.bulkInsert('Questions', [
  {
    title: "I have a dog question",
    votes: 0,
    views: 0,
    content: "I just got a new puppy and I'm not sure what to feed him. Which brand is best for a German Shepherd?",
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Training a cat",
    votes: 0,
    views: 0,
    content: "How can I train my cat to jump 5 feet???",
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "How do I play with a cat?",
    votes: 0,
    views: 0,
    content: "How do I play with a cat? I've only had dogs. Please help.",
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Bunny question",
    votes: 0,
    views: 0,
    content: "I will be getting my first bunny soon. What should I expect?",
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Can Parrots read?",
    votes: 0,
    views: 0,
    content: "How can I teach my parrot to read?",
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
