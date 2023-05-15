import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

const mongoConnection = mongoose.connect(MONGO_URI);

export default mongoConnection;
