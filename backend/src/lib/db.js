import mongoose from "mongoose";

const reset = "\x1b[0m";
const blue = "\x1b[34m";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`${blue}Connected to MongoDB ${conn.connection.host}${reset}`);
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1); // 1 is failure, 0 is success
  }
};
