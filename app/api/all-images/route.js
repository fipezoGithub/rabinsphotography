import Wedding from "@/models/weddingModel";

export async function GET(req) {
  try {
    let allImgResponse = [];
    const all = await Wedding.find({}, { images: 1 });
    all.map((item) => item.images.map((it) => allImgResponse.push(it)));
    return Response.json(allImgResponse, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(error, { status: 500 });
  }
}
