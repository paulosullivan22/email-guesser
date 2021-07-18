"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatFullNameEmail_1 = require("../formatFullNameEmail");
describe("formatFullNameEmail tests", () => {
    it("should properly format full name emails", () => {
        // Arrange
        const name = "mike jones";
        const company = "google.com";
        // Act
        const result = formatFullNameEmail_1.formatFullNameEmail(name, company);
        // Assert
        expect(result).toEqual("mikejones@google.com");
    });
});
