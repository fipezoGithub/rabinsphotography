import { getFileStream } from "@/utils/s3";

export async function GET(req, { params }) {
  const imgName = params.img;
  try {
    const readStream = await getFileStream(imgName);
    const data = await readStream.transformToString("base64");
    // return Response.json("data:image/webp;base64," + data, {
    //   status: 200,
    // });
    const buffer = Buffer.from(data, "base64");
    return new Response(buffer, {
      headers: {
        "content-type": "image/webp",
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
