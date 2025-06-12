'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('accounts', [
      {
        number_account: '34216789',
        agency: '003',
        balance: 1500.50,
        user_id: 1,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '51529035',
        agency: '003',
        balance: 3200.75,
        user_id: 2,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '79780671',
        agency: '003',
        balance: 5000.00,
        user_id: 3,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '15217798',
        agency: '003',
        balance: 2000.00,
        user_id: 4,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '62231640',
        agency: '003',
        balance: 1000.00,
        user_id: 5,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '20243165',
        agency: '003',
        balance: 1000.0,
        user_id: 6,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '47929915',
        agency: '003',
        balance: 3000.00,
        user_id: 7,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },{
        number_account: '03412343',
        agency: '003',
        balance: 3000.00,
        user_id: 8,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '82547220',
        agency: '003',
        balance: 3000.00,
        user_id: 9,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '45630123',
        agency: '003',
        balance: 3000.00,
        user_id: 10,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('accounts', null, {});
  }
};
