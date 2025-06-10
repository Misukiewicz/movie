import { Request, Response } from 'express';
import { Review } from '../models/Review';

export const getReviews = async (req: Request, res: Response) => {
    const reviews = await Review.find().populate('movieId');
    res.json(reviews);
};

export const createReview = async (req: Request, res: Response) => {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
};
