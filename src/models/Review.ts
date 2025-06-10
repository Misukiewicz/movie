import { Schema, model, Types } from 'mongoose';

interface IReview {
    movieId: Types.ObjectId;
    reviewer: string;
    content: string;
    rating: number;
}

const reviewSchema = new Schema<IReview>({
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    reviewer: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true }
}, { timestamps: true });

export default model<IReview>('Review', reviewSchema);
