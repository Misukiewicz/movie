import { Router } from 'express';
import Review from '../models/Review';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
