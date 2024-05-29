import BabyAndMaternity from "@/models/babyAndMaternityModel";

const db = require("@/utils/db");

export async function GET(req, { params }) {
  try {
    const babyId = params.babyId;
    const wedding = await BabyAndMaternity.findById(babyId);
    return Response.json(wedding, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
