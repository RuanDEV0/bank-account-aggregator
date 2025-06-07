'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('consents', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      expiration: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      authorization: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      account_id: {
        type: Sequelize.INTEGER,
        references: {model: 'accounts', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
        unique: true
      },
      expiration_date: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('consents');
  }
};
