import request from "supertest";

import { app } from "../../app";

describe("api handler tests", (): void => {
  it("should pass with valid payload", async (): Promise<void> => {
    // Arrange
    const name: string = "mike jones";
    const company: string = "google.com";
    const req: request.Test = request(app)
      .post("/handler")
      .set("Content-Type", "application/json; charset=utf-8");

    // Act
    const res: request.Response = await req.send({ name, company });

    // Assert
    expect(res.body.email).toEqual("mikejones@google.com");
  });

  it("should return 400 when invalid name is passed", async (): Promise<void> => {
    // Arrange
    const name: string = "mike";
    const company: string = "google.com";
    const req: request.Test = request(app)
      .post("/handler")
      .set("Content-Type", "application/json; charset=utf-8");

    // Act
    const res: request.Response = await req.send({ name, company });
    // Assert

    expect(res.text).toEqual(
      "\"name\" with value \"mike\" fails to match the required pattern: /^(([a-z]+)\\s([a-z]+))$/"
    );
  });

  it("should return 400 when invalid email is passed", async (): Promise<void> => {
    // Arrange
    const name: string = "mike jones";
    const company: string = "google";
    const req: request.Test = request(app)
      .post("/handler")
      .set("Content-Type", "application/json; charset=utf-8");

    // Act
    const res: request.Response = await req.send({ name, company });
    // Assert

    expect(res.text).toEqual(
      "\"company\" with value \"google\" fails to match the required pattern: /^([a-z]+)\\.([a-z]{1,3})$/"
    );
  });

  it("should return 400 when a non-existant company domain is provided", async (): Promise<void> => {
    // Arrange
    const name: string = "mike jones";
    const company: string = "netflix.com";
    const req: request.Test = request(app)
      .post("/handler")
      .set("Content-Type", "application/json; charset=utf-8");

    // Act
    const res: request.Response = await req.send({ name, company });
    // Assert

    expect(res.text).toEqual(
      "Sorry, we do not have this company in our records"
    );
  });
});
