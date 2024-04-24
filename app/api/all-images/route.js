import Event from "@/models/eventModel";
import Wedding from "@/models/weddingModel";

export async function GET(req) {
  try {
    let allImgResponse = [];
    const allWeddingPhoto = await Wedding.find({}, { images: 1 });
    const allEventsPhoto = await Event.find({}, { images: 1 });
    allWeddingPhoto.map((item) =>
      item.images.map((it) => allImgResponse.push(it))
    );
    allEventsPhoto.map((item) =>
      item.images.map((it) => allImgResponse.push(it))
    );
    return Response.json(allImgResponse, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(error, { status: 500 });
  }
}
