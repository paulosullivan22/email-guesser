"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatFirstNameInitialEmail_1 = require("../formatFirstNameInitialEmail");
describe("formatFirstNameInitialEmail tests", () => {
    it("should properly format first name with initial emails", () => {
        // Arrange
        const name = "mike jones";
        const company = "google.com";
        // Act
        const result = formatFirstNameInitialEmail_1.formatFirstNameInitialEmail(name, company);
        // Assert
        expect(result).toEqual("mjones@google.com");
    });
});
