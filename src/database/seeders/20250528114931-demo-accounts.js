'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('accounts', [
      {
        number_account: '00458231',
        agency: '1743',
        balance: 1500.50,
        user_id: 1,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '84736291',
        agency: '3748',
        balance: 3200.75,
        user_id: 2,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '83274910',
        agency: '4829',
        balance: 5000.00,
        user_id: 3,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '18726394',
        agency: '7854',
        balance: 2000.00,
        user_id: 4,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '83746201',
        agency: '9247',
        balance: 1000.00,
        user_id: 5,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '84956671',
        agency: '9462',
        balance: 1000.0,
        user_id: 6,
        institution_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        number_account: '69442561',
        agency: '8911',
        balance: 3000.00,
        user_id: 7,
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
