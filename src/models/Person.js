const Sequelize = require ('sequelize');
const sequelize = require('../database/database').sequelize;

const person = sequelize.define('person',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fullname:{
        type: Sequelize.TEXT
    },
    birthdate:{
        type: Sequelize.DATE
    },
    father:{
        type:Sequelize.INTEGER,
    },
    mother:{
        type: Sequelize.INTEGER,
    }
    },{
        freezeTableName : true,
        timestamps: false
    }
);

module.export = person;
