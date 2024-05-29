import { uploadFile } from "@/utils/s3";
import { join } from "path";
import { createWriteStream } from "fs";
import JoinUs from "@/models/joinUsModel";

const db = require("@/utils/db");

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("resume");
    const filePath = join(process.cwd(), "uploads", "joinus-" + file.name);
    const writeStream = createWriteStream(filePath);
    const bufferValue = Buffer.from(await file.arrayBuffer());
    const writeFinished = new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });
    writeStream.write(bufferValue);
    writeStream.end();

    await writeFinished;
    const uploadAbleFile = { filename: "joinus-" + file.name, path: filePath };
    await uploadFile(uploadAbleFile);
    const newJoinUs = await new JoinUs({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      designation: data.get("designation"),
      address: data.get("address"),
      equipments: data.get("equipments"),
      idproof: uploadAbleFile.filename,
    });
    await newJoinUs.save();

    return Response.json(newJoinUs, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const joinUsRequests = await JoinUs.find({});
    return Response.json(joinUsRequests, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
