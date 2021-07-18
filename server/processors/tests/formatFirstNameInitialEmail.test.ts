import { formatFirstNameInitialEmail } from "../formatFirstNameInitialEmail";

describe("formatFirstNameInitialEmail tests", (): void => {
  it("should properly format first name with initial emails", (): void => {
    // Arrange
    const name: string = "mike jones";
    const company: string = "google.com";

    // Act
    const result: string = formatFirstNameInitialEmail(name, company);

    // Assert
    expect(result).toEqual("mjones@google.com");
  });
});
