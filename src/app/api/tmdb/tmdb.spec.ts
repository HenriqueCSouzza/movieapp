import handler from "./route";
import { expect, test } from "vitest";

test("/api/tmdb", async () => {
  const response = await handler();

  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({ message: "Hello from Next.js!" });
});
