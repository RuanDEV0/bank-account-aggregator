'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('institutions', [
      {
        name: 'Santander',
        cnpj: '00000000000191',
        image: 'https://example.com/banco-santander.png',
        phone: '6130000000',
        email: 'contato@ss.com.br',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('institutions', null, {});
  }
};
