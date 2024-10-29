import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log(`Connected to MongoDB`);

    } catch (error) {
        console.log(`Failed to connect to MongoDB: ${error.message}`);
    }
}
export default connectDB;