import { checkEmailFormatType } from "../checkEmailFormatType";
import { EmailFormat } from "../../constants";

describe("checkEmailFormatType tests", () => {
  it('should return "fullName" when an email contains full name', () => {
    // Arrange
    const name: string = "mike jones";
    const email: string = "mikejones@test.com";

    // Act
    const result: string = checkEmailFormatType(name, email);

    // Assert
    expect(result).toEqual(EmailFormat.FullName);
  });

  it('should return "firstNameInitial" when an email does not contain full name', () => {
    // Arrange
    const name: string = "mike jones";
    const email: string = "mjones@test.com";

    // Act
    const result: string = checkEmailFormatType(name, email);

    // Assert
    expect(result).toEqual(EmailFormat.FirstNameInitial);
  });
});
