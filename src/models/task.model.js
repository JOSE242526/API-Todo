const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type:   DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type:   DataTypes.TEXT,
        allowNull: false
    },
    is_completed: {
        type:   DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

module.exports = Tasks