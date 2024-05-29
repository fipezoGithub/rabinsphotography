import { mongoose } from "mongoose";

async function connectDb() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
  console.log("connected successfully");
}

connectDb();
