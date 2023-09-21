import shortenUrl from "@/actions/shortenUrl";

import { expect, describe, it } from "vitest";
import { faker } from "@faker-js/faker";

describe("shortenUrl function", async () => {
  it("returns a short id for input", async () => {
    // Arrange
    const testUrl = faker.internet.url();

    // Act
    const response = await shortenUrl(testUrl);

    // Assert
    if ("data" in response)
      expect(response.data).toContain({
        originalUrl: testUrl,
      });
  });
});
