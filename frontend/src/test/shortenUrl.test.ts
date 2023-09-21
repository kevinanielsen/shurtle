import { expect, test, describe } from "vitest";
import shortenUrl from "@/actions/shortenUrl";

describe("shortenUrl function", async () => {
  test("returns a short id for input", async () => {
    const response = await shortenUrl("https://app.shurtle.site/");
    expect(response).toContain({ status: 200 });
    if ("data" in response)
      expect(response.data).toContain({
        originalUrl: "https://app.shurtle.site/",
      });
  });
});
