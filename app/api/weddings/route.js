import Wedding from "@/models/weddingModel";

const db = require("@/utils/db");

export async function POST(req) {
  try {
    const data = await req.json();
    const newWedding = await new Wedding({
      husband: data.husband,
      wife: data.wife,
      venuename: data.venuename,
      location: data.location,
      weddingtype: data.weddingtype,
      images: data.images,
    });
    await newWedding.save();
    return Response.json(newWedding, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const weddings = await Wedding.find({});
    return Response.json(weddings, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
