import express, {
  Application,
  RequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";
import bodyParser from "body-parser";
const app = express();

import createValidationMiddleware from "./validation";
import { createDiMiddleware, createDiContext } from "./context";
import { handler } from "./api/handler";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(createDiMiddleware(createDiContext) as RequestHandler);
app.use((_: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(createValidationMiddleware());

app.post("/handler", handler as Application);

export { app };
