const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const fs = require("fs");

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_S3_KEY_SECRET,
  },
});

async function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename,
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
  } catch (error) {
    console.log(error);
  }
}

exports.uploadFile = uploadFile;

async function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
  };

  try {
    const data = await s3Client.send(new GetObjectCommand(downloadParams));
    return data.Body;
  } catch (error) {
    console.log("Error");
    throw error;
  }
}

exports.getFileStream = getFileStream;

async function deleteFile(fileKey) {
  const deleteParams = {
    Key: fileKey,
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
  };

  try {
    const data = await s3Client.send(new DeleteObjectCommand(deleteParams));
  } catch (error) {
    console.log("Error");
    throw error;
  }
}

exports.deleteFile = deleteFile;
