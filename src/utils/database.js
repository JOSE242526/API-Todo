const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'todo-db',
    username: 'postgres',
    password: '123456',
    port: 5432
})

module.exports = db