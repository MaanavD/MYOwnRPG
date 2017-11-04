module.exports = {
    port: process.env.port || 8081, //declare port
    db:{ //sets up all sequelize configuration
        database: process.env.DB_NAME || 'MYOwnRPG',
        user: process.env.DB_USER || 'MYOwnRPG',
        password: process.env.DB_PASS || 'MYOwnRPG',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './MYOwnRPG.squlite'
        }
    }
}
