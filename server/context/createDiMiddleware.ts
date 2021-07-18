import { NextFunction } from "express";
import { RequestHandler } from "express";

import { IExtendedRequest, IDiContext } from "../interfaces";

const createDiMiddleware: (
  createDiContext: () => IDiContext
) => RequestHandler = (diContext: () => IDiContext): any => {
  return async function handleRequest(
    req: IExtendedRequest,
    _: Response,
    next: NextFunction
  ): Promise<void> {
    const request: IExtendedRequest = req;
    request.diContext = diContext();

    next();
  };
};

export default createDiMiddleware;
