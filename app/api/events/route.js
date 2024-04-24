import Event from "@/models/eventModel";
import { uploadFile } from "@/utils/s3";
import sharp from "sharp";

const db = require("@/utils/db");
const path = require("path");

async function resizeImage(editedFile) {
  const file = await editedFile.arrayBuffer();
  const filename = path.parse(editedFile.name).name;
  const ext = path.parse(editedFile.name).ext;
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
    const newEvent = await new Event({
      title: data.get("title"),
      venuename: data.get("venuename"),
      location: data.get("location"),
      eventtype: data.get("eventtype"),
      images: imageFiles,
    });
    await newEvent.save();

    return Response.json(newEvent, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const events = await Event.find({});
    return Response.json(events, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
