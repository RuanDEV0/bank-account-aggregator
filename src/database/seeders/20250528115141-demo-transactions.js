'use strict';

/** @type {import('sequelize-cli').Seeder} */
export default {
  async up (queryInterface) {
    await queryInterface.bulkInsert('transactions', [
      {
        amount: 500.00,
        type: 'credit',
        description: 'Depósito inicial',
        account_id: 1,   
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: 200.00,
        type: 'debit',
        description: 'Compra no supermercado',
        account_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: 1500.00,
        type: 'credit',
        description: 'Pagamento de salário',
        account_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: 350.00,
        type: 'debit',
        description: 'Pagamento de conta de luz',
        account_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        amount: 250.00,
        type: 'debit',
        description: 'Saque em caixa eletrônico',
        account_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};
