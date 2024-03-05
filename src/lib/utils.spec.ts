import { cn } from "@/lib/utils";
import { assert, test } from "vitest";

test("cn function should merge class strings correctly", () => {
  const result = cn("class1", "class2");
  assert.equal(result, "class1 class2");
});

test("cn function should handle undefined and null values", () => {
  const result = cn("class1", undefined, null, "class2");
  assert.equal(result, "class1 class2");
});

test("cn function should handle empty strings", () => {
  const result = cn("class1", "", "class2");
  assert.equal(result, "class1 class2");
});

test("cn function should merge arrays of class strings correctly", () => {
  const result = cn(["class1", "class2"], "class3", ["class4"]);
  assert.equal(result, "class1 class2 class3 class4");
});
