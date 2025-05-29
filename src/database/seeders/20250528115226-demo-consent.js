'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('consents', [
      {
        expiration: false,
        authorization: true,
        account_id: 1,
        expiration_date: new Date(new Date().setMonth(new Date().getMonth() + 6)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        expiration: false,
        authorization: true,
        account_id: 2,
        expiration_date: new Date(new Date().setMonth(new Date().getMonth() + 12)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        expiration: true,
        authorization: false,
        account_id: 3,
        expiration_date: null, 
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('consents', null, {});
  }
};
