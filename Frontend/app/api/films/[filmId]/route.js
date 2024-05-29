import Film from "@/models/filmModel";

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

export async function GET(req, { params }) {
  try {
    const filmId = params.filmId;
    const film = await Film.findById(filmId);
    return Response.json(film, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const filmId = params.filmId;
    const data = await req.formData();
    const film = await Film.findById(filmId);
    let updatedData = {};
    if (data.get("title")) {
      updatedData.title = data.get("title");
    }
    if (data.get("cover")) {
      const file = data.get("cover");
      const filePromises = [];
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
      await Promise.all(filePromises);
      updatedData.cover = resizeNewImage.filename;
    }
    if (data.getAll("videolinks").length > 0) {
      updatedData.videolinks = data.getAll("videolinks");
      updatedData.videolinks.push(...film.videolinks);
    }

    film.title = updatedData.title || film.title;
    film.cover = updatedData.cover || film.cover;
    film.videolinks = updatedData.videolinks || film.videolinks;

    const updatedFilm = await film.save();

    return Response.json(updatedFilm, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
