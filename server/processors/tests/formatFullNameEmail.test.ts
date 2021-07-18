import { formatFullNameEmail } from "../formatFullNameEmail";

describe("formatFullNameEmail tests", (): void => {
  it("should properly format full name emails", (): void => {
    // Arrange
    const name: string = "mike jones";
    const company: string = "google.com";

    // Act
    const result: string = formatFullNameEmail(name, company);

    // Assert
    expect(result).toEqual("mikejones@google.com");
  });
});
