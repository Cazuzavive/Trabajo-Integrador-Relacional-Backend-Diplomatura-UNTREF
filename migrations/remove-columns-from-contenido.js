'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('contenido', 'CategoriumCategoriaId');
        await queryInterface.removeColumn('contenido', 'GenGenId');
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('contenido', 'CategoriumCategoriaId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'categoria', // o el nombre de tu tabla correspondiente
                key: 'categoria_id'
            }
        });

        await queryInterface.addColumn('contenido', 'GenGenId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'gen', // o el nombre de tu tabla correspondiente
                key: 'gen_id'
            }
        });
    }
};
