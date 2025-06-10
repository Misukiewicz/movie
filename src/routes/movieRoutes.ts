import { Router } from 'express';
import { getMovies, createMovie } from '../controllers/movieController';

const router = Router();

router.get('/', getMovies);
router.post('/', createMovie);

export default router;
