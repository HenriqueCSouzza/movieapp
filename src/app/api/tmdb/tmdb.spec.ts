import { describe, expect, test } from "vitest";
import { createMocks, RequestMethod } from "node-mocks-http";
import { GET, POST } from "./route";
import { NextApiRequest, NextApiResponse } from "next";

describe("Api the movie DB", () => {
  function mockRequestResponse(method: RequestMethod = "GET", body: any) {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({
        method,
        body: body,
      });

    return { req, res };
  }

  test("/api/tmdb get", async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "Hello from Next.js!" });
  });

  test("/api/tmdb post", async () => {
    const { req } = mockRequestResponse("POST", { name: "henrique" });

    const response = await POST(req);

    expect(response.status).toBe(200);
    expect(await response.json()).toStrictEqual({ data: req.body });
  });
});
