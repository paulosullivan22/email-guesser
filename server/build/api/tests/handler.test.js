"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../app");
describe("api handler tests", () => {
    it("should pass with valid payload", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const name = "mike jones";
        const company = "google.com";
        const req = supertest_1.default(app_1.app)
            .post("/handler")
            .set("Content-Type", "application/json; charset=utf-8");
        // Act
        const res = yield req.send({ name, company });
        // Assert
        expect(res.body.email).toEqual("mikejones@google.com");
    }));
    it("should return 400 when invalid name is passed", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const name = "mike";
        const company = "google.com";
        const req = supertest_1.default(app_1.app)
            .post("/handler")
            .set("Content-Type", "application/json; charset=utf-8");
        // Act
        const res = yield req.send({ name, company });
        // Assert
        expect(res.text).toEqual("\"name\" with value \"mike\" fails to match the required pattern: /^(([a-z]+)\\s([a-z]+))$/");
    }));
    it("should return 400 when invalid email is passed", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const name = "mike jones";
        const company = "google";
        const req = supertest_1.default(app_1.app)
            .post("/handler")
            .set("Content-Type", "application/json; charset=utf-8");
        // Act
        const res = yield req.send({ name, company });
        // Assert
        expect(res.text).toEqual("\"company\" with value \"google\" fails to match the required pattern: /^([a-z]+)\\.([a-z]{1,3})$/");
    }));
    it("should return 400 when a non-existant company domain is provided", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const name = "mike jones";
        const company = "netflix.com";
        const req = supertest_1.default(app_1.app)
            .post("/handler")
            .set("Content-Type", "application/json; charset=utf-8");
        // Act
        const res = yield req.send({ name, company });
        // Assert
        expect(res.text).toEqual("Sorry, we do not have this company in our records");
    }));
});
