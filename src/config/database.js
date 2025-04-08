export default {
	dialect: 'postgres',
	host: 'localhost',
	username: process.env.databaseUsername,
	password: process.env.databasePassword,
	database: 'open-finance',
	define: {
		timestamp: true,
		underscored: true,
		underscoredAll: true,
	},
};
