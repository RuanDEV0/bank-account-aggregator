'use strict';
import bcrypt from 'bcryptjs';

/** @type {import('sequelize-cli').Seeder} */
export default {
	async up(queryInterface) {
		const passwordHash = await bcrypt.hash('12345678', 7);
		await queryInterface.bulkInsert(
			'users',
			[
				{
					cpf: '12345678906',
					name: 'Gabriel Macedo',
					email: 'joao.silva@example.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '98765432100',
					name: 'Maria Souza',
					email: 'maria.souza@example.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '45678912300',
					name: 'Carlos Oliveira',
					email: 'carlos.oliveira@example.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('users', null, {});
	},
};
