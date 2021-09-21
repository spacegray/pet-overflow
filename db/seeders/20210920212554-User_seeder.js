'use strict';

module.exports = {
        up: (queryInterface, Sequelize) => {
            /*
              Add altering commands here.
              Return a promise to correctly handle asynchronicity.

              Example:
              */
            return queryInterface.bulkInsert('Users', [
                {
                    userName: 'demo',
                    email: 'demo@example.com',
                    hashedPassword: '$2a$10$zOdIOGhWwbtaOC9RyYhFo.tr90f2dWv6igYFRIs/0sEuCbxXfRnbu',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    userName: 'david',
                    email: 'david@example.com',
                    hashedPassword: '$2a$10$zOdIOGhWwbtaOC9RyYhFo.tr90f2dWv6igYFRIs/0sEuCbxXfRnbu',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    userName: 'val',
                    email: 'val@example.com',
                    hashedPassword: '$2a$10$zOdIOGhWwbtaOC9RyYhFo.tr90f2dWv6igYFRIs/0sEuCbxXfRnbu',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]);
        },

            down: (queryInterface, Sequelize) => {
                /*
                  Add reverting commands here.
                  Return a promise to correctly handle asynchronicity.

                  Example:
                  */
                return queryInterface.bulkDelete('Users', null, {});
            },
        };
