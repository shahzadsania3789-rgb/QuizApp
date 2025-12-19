import mongoose from "mongoose";    

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shahzadsania3789_db_user:quizapp218@cluster0.3j3h7wa.mongodb.net/QuizApp')
    .then(() => {
        console.log("MongoDB connected successfully")})
    }        