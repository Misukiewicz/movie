import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './config/db';
import app from './app';

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
