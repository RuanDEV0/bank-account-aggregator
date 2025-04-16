
export default{
	dialect: 'postgres',
	host: 'db',
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	}
};
