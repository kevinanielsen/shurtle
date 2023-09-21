import checkUrl from "@/actions/checkUrl";

import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";

describe("CheckUrl function", async () => {
  it("Returns true if url valid", async () => {
    // Arrange
    const testUrl = faker.internet.url();

    // Act
    const result = await checkUrl(testUrl);

    // Assert
    expect(result).toBe(true);
  });
  it("Returns false if url not valid", async () => {
    // Arrange
    const testUrl = faker.string.alpha({ length: { min: 5, max: 10 } });

    // Act
    const result = await checkUrl(testUrl);

    // Assert
    expect(result).toBe(false);
  });
});
