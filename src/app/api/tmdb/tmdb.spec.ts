import { NextApiRequest, NextApiResponse } from "next";
import { expect, test } from "vitest";
import { createMocks, MockRequest } from "node-mocks-http";
import { GET, POST } from "./route";

test("/api/tmdb get", async () => {
  const { req } = createMocks({
    method: "GET",
  });
  const response = await GET();

  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({ message: "Hello from Next.js!" });
});

test("/api/tmdb post", async () => {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({
      method: "POST",
      body: { name: "Henrique" },
    });

  const envDefaul = process.env.NEXT_URL || "teste";

  const response = await POST(req, res);

  expect(response.status).toBe(200);
  expect(await response.json()).toEqual(req.body);
});
