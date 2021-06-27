import Sequalize from 'sequelize';
import {sequalize} from '../database/database'

const person = sequalize.define('person',{
    id:{
        type: Sequalize.INTEGER,
        primaryKey: true
    },
    fullname:{
        type: Sequalize.TEXT
    },
    birthdate:{
        type: Sequalize.DATE
    },
    father:{
        type:Sequalize.INTEGER,
    },
    mother:{
        type: Sequalize.INTEGER,
    }
    },{
        freezeTableName : true,
        timestamps: false
    }
);
export default person;