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
					cpf: '12345678901',
					name: 'João Almeida',
					email: 'conta1@teste.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '12345678902',
					name: 'Maria de Freitas',
					email: 'conta2@teste.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '12345678903',
					name: 'José Amaral',
					email: 'conta3@teste.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '12345678904',
					name: 'Renan do Carmo',
					email: 'conta4@teste.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '12345678905',
					name: 'Felipe da Guia',
					email: 'conta5@teste.com',
					password: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '12345678909',
					name: 'Renato Gaúcho',
					email: 'conta9@teste.com',
					passwordHash: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					cpf: '12345678910',
					name: 'Mazembe Mundial',
					email: 'conta10@teste.com',
					passwordHash: passwordHash,
					created_at: new Date(),
					updated_at: new Date(),
				}
			],
			{}
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('users', null, {});
	},
};
