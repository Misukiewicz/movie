import mongoose from 'mongoose';

export const connectDB = async () => {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        throw new Error('MONGO_URI is not defined in environment variables');
    }

    try {
        await mongoose.connect(uri);
        console.log('git commit -m "first commit"MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed', err);
        process.exit(1);
    }
};
