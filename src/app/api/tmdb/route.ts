import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  return Response.json({ message: "Hello from Next.js!" });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  console.log(req);
  return Response.json({ data });
}
