'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {userName: 'bobby', email: 'bobby@example.com', hashedPassword: '1100010', createdAt: new Date(), updatedAt: new Date()},
        {userName: 'sheryl', email: 'sheryl@example.com', hashedPassword: '1100010', createdAt: new Date(), updatedAt: new Date()},
        {userName: 'idk', email: 'idk@example.com', hashedPassword: '1100010', createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
