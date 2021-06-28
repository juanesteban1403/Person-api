const express =require ('express')
const morgan = require ('morgan')
const personAPI=require('./routes/person')



const app = express();

// middlewares

app.use(morgan('dev'));
app.use(json());

//routes
personAPI(app);


module.exports = app;




