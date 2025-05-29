'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('accounts', [
      {
        number_account: '123456-73',
        agency: '0001',
        balance: 1500.50,
        user_id: 1,            
        institution_id: 1,     
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '987654-32',
        agency: '0001',
        balance: 3200.75,
        user_id: 2,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '456789-11',
        agency: '0002',
        balance: 500.00,
        user_id: 3,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
