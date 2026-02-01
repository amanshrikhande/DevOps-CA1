import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🧠 Checking MONGO_URI:", process.env.MONGO_URI);

    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is undefined. Check your .env or dotenv config.");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
