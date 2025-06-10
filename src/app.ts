import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes';
import reviewRoutes from './routes/reviewRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

export default app;
