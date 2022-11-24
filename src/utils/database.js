const { sequileze } = require('sequelize')

const db = new Sequelize({
    dialet : 'postgres',
    host: 'localhost',
    database: 'todo-DB',
    username: 'postgres',
    password: '123456',
    port: 5432
})


db.authenticate()
    .then(() => console.log('Database Sincronizada correctamente'))
    .cath((err) => console.log(err))


db.sync()
    .then(() => console.log('Database Sincronizada correctamente'))
    .cath((err) => console.log(err))

module.exports = db