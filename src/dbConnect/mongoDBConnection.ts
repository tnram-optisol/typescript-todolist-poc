import mongoose from "mongoose";

const MONGO_URI =
  (process.env.MONGO_URI as string) || "mongodb://localhost:27017/tasks";

const mongoConnection = mongoose.connect(MONGO_URI);

export default mongoConnection;
