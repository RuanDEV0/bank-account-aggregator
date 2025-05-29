'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('transactions_openfinance', [
      {
        amount: 500.00,
        agency: '0001',
        account_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: 1500.50,
        agency: '0002',
        account_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: 230.75,
        agency: '0003',
        account_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('transactions_openfinance', null, {});
  }
};
