import Contact from "@/models/contactModel";
const db = require("@/utils/db");

export async function POST(req) {
  try {
    const formData = await req.json();
    const newCotactRequest = new Contact({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      shoottype: formData.shoottype,
      eventdate: formData.eventdate,
      location: formData.location,
      description: formData.description,
    });
    await newCotactRequest.save();
    return Response.json(newCotactRequest, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
