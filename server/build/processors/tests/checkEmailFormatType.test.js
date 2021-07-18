"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkEmailFormatType_1 = require("../checkEmailFormatType");
const constants_1 = require("../../constants");
describe("checkEmailFormatType tests", () => {
    it('should return "fullName" when an email contains full name', () => {
        // Arrange
        const name = "mike jones";
        const email = "mikejones@test.com";
        // Act
        const result = checkEmailFormatType_1.checkEmailFormatType(name, email);
        // Assert
        expect(result).toEqual(constants_1.EmailFormat.FullName);
    });
    it('should return "firstNameInitial" when an email does not contain full name', () => {
        // Arrange
        const name = "mike jones";
        const email = "mjones@test.com";
        // Act
        const result = checkEmailFormatType_1.checkEmailFormatType(name, email);
        // Assert
        expect(result).toEqual(constants_1.EmailFormat.FirstNameInitial);
    });
});
