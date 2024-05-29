import Wedding from "@/models/weddingModel";

const db = require("@/utils/db");

export async function GET(req, { params }) {
  try {
    const weddingId = params.weddingId;
    const wedding = await Wedding.findById(weddingId);
    return Response.json(wedding, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
