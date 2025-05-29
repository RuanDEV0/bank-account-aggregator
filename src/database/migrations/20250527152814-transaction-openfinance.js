'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transactions_openfinance', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      agency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      account_id: {
        type: Sequelize.INTEGER,
        references: {model: 'accounts', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type:Sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('transactions_openfinance');
  }
};
