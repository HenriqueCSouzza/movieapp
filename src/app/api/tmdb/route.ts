import { readableStreamToString } from "@/lib/stream";
import { NextApiRequest } from "next";

export async function GET() {
  return Response.json({ message: "Hello from Next.js!" });
}

export async function POST(req: NextApiRequest) {
  console.log(req.body);
  const body = await readableStreamToString(req.body);
  return Response.json({ data: body });
}
