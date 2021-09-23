'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
                'Votes',
            'voteType',
                Sequelize.BOOLEAN
            );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Votes');
    }
};
