import mongoose from "mongoose";

const connectDB = async (DATABASE_URL_LOCAL) => {
    console.log("URL : " + DATABASE_URL_LOCAL);
    try {
        await mongoose.connect(DATABASE_URL_LOCAL)
        console.log(`Connected to MongoDB ${DATABASE_URL_LOCAL}`);

    } catch (error) {
        console.log(error.message);
        console.log(`Failed to connect to MongoDB: ${error}`);
    }
}
export default connectDB;