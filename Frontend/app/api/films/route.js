import Film from "@/models/filmModel";
import { uploadFile } from "@/utils/s3";
import sharp from "sharp";

const db = require("@/utils/db");
const fs = require("fs");
const util = require("util");
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
    const file = data.get("cover");
    const filePromises = [];
    const resizeNewImage = await resizeImage(file);
    filePromises.push(uploadFile(resizeNewImage));

    await Promise.all(filePromises);
    const newFilm = await new Film({
      title: data.get("title"),
      videolinks: data.getAll("videolinks"),
      cover: resizeNewImage.filename,
    });
    await newFilm.save();

    return Response.json(newFilm, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const films = await Film.find({});
    return Response.json(films, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
