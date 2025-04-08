export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'boot',
    database: 'open-finance',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true
    }
}