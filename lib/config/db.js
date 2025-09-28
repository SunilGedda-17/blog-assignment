import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}
export const ConnectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
    });
    console.log("DB Connected");
  } catch (err) {
    console.error("DB connection error:", err);
    throw err;
  }
}
