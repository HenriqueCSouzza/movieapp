import { NextApiRequest } from "next";

export default async function GET() {
  console.log();
  return Response.json({ message: "Hello from Next.js!" });
}
