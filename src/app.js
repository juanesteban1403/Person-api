import express, {json} from 'express';
import morgan from 'morgan';

// Importing routes


import personRoutes from './routes/person';

const app = express();

// middlewares

app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/person',personRoutes);




export default app;


