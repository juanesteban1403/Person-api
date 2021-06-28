const Sequelize = require('sequelize')

const sequelize= new Sequelize(
    'APINODE',
    'postgres',
    'juanesteban1403',
    {
        host: 'localhost',
        dialect : 'postgres',
        pool:{
            max:5,
            min:0,
            require:3000,
            idle:10000
        },
        logging: false
    }
)

module.export = sequelize  