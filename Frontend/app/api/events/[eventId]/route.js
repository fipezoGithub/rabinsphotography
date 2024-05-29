import Event from "@/models/eventModel";

const db = require("@/utils/db");

export async function GET(req, { params }) {
  try {
    const eventId = params.eventId;
    const wedding = await Event.findById(eventId);
    return Response.json(wedding, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
