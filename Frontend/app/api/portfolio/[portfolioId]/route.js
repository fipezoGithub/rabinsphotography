import Portfolio from "@/models/portfolioModel";

const db = require("@/utils/db");

export async function GET(req, { params }) {
  try {
    const portfolioId = params.portfolioId;
    const portfolio = await Portfolio.findById(portfolioId);
    return Response.json(portfolio, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
