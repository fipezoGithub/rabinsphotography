import { mongoose } from "mongoose";

async function connectDb() {
  await mongoose.connect(
    `mongodb+srv://rabinsphotography:T6Qxk454PqF07Qn1@rabinsphotograpghy.s8v3yam.mongodb.net/rabinsphotography`
  );
  console.log("connected successfully");
}

connectDb();
