import Career from "@/models/careerModel";
import { uploadFile } from "@/utils/s3";
import { join } from "path";
import { createWriteStream } from "fs";

const db = require("@/utils/db");

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("resume");
    const filePath = join(process.cwd(), "uploads", "career-" + file.name);
    const writeStream = createWriteStream(filePath);
    const bufferValue = Buffer.from(await file.arrayBuffer());
    const writeFinished = new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });
    writeStream.write(bufferValue);
    writeStream.end();

    await writeFinished;
    const uploadAbleFile = { filename: "career-" + file.name, path: filePath };
    await uploadFile(uploadAbleFile)
    const newCareer = await new Career({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      designation: data.get("designation"),
      resume: uploadAbleFile.filename,
    });
    await newCareer.save();

    return Response.json(newCareer, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const careerRequests = await Career.find({});
    return Response.json(careerRequests, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
