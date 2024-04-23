import BabyAndMaternity from "@/models/babyAndMaternityModel";
import { uploadFile } from "@/utils/s3";
import sharp from "sharp";

const db = require("@/utils/db");
const path = require("path");

async function resizeImage(editedFile) {
  const file = await editedFile.arrayBuffer();
  const filename = path.parse(editedFile.name).name;
  const ext = ".webp";
  const resizedFilename = filename + ext;
  const outputPath = "uploads/" + resizedFilename;

  await sharp(file).toFormat("webp", { quality: 70 }).toFile(outputPath);

  return {
    filename: resizedFilename,
    path: outputPath,
  };
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const files = data.getAll("images");
    const filePromises = [];
    files.forEach(async (file) => {
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
    });

    const imageFiles = files.map((file) => file.name);

    await Promise.all(filePromises);
    const newBabyEvent = await new BabyAndMaternity({
      title: data.get("title"),
      venuename: data.get("venuename"),
      location: data.get("location"),
      eventtype: data.get("eventtype"),
      images: imageFiles,
    });
    await newBabyEvent.save();

    return Response.json(newBabyEvent, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const babyAndMaternityEvents = await BabyAndMaternity.find({});
    return Response.json(babyAndMaternityEvents, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
