import dotenv from  'dotenv';
dotenv.config();


export default {
	dialect: 'postgres',
	host: 'localhost',
	username: `${process.env.databaseUsername}`,
	password: `${process.env.databasePassword}`,
	database: 'open-finance',
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	}
};
