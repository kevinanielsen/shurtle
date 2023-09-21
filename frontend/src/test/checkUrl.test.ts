import checkUrl from "@/actions/checkUrl";
import { test, expect } from "vitest";

test("checks if input is valid url", async () => {
  expect(await checkUrl("https://app.shurtle.site/")).toBe(true)
});