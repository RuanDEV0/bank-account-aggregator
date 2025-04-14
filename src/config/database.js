
export default {
	dialect: 'postgres',
	host: 'db',
	username: process.env.databaseUsername,
	password: process.env.databasePassword,
	database: 'open-finance',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	}
};
