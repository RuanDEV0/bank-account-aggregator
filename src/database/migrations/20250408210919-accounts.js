'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      number_account: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      balance: {
        type: Sequelize.DECIMAL(15,2),
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'users', key: 'cpf'}
      },
      institution_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'institutions', key: 'id'}
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('accounts');
  }
};
