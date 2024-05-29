const path = require("path");
const sharp = require("sharp");

async function resizeImage(file) {
  const filename = path.parse(file.filename).name;
  const ext = path.parse(file.filename).ext;
  const resizedFilename = filename + "-" + ext;
  const outputPath = "uploads/" + resizedFilename;

  await sharp(file.path).toFormat("webp", { quality: 70 }).toFile(outputPath);

  return {
    filename: resizedFilename,
    path: outputPath,
  };
}

module.exports = { resizeImage };
