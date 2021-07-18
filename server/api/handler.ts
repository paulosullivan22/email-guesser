import { Response } from "express";
import HttpStatus from "http-status-codes";
import { Model } from "sequelize";

import { getCompany } from "../db";
import {
  formatFullNameEmail,
  formatFirstNameInitialEmail,
} from "../processors";
import { EmailFormat } from "../constants";
import { IExtendedRequest } from "../interfaces";

export const handler = async (req: IExtendedRequest, res: Response) => {
  const { dbClient } = req.diContext;
  const { name, company } = req.body;

  let companySearchResult: Model | null;

  try {
    companySearchResult = await getCompany(dbClient, company);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    return;
  }

  let response: string;

  if (companySearchResult) {
    const { emailFormat } = (companySearchResult as any).dataValues;
    response = formatFullNameEmail(name, company);

    if (emailFormat === EmailFormat.FullName) {
      res.status(HttpStatus.OK).send({ email: response });
      return;
    }

    response = formatFirstNameInitialEmail(name, company);

    res.status(HttpStatus.OK).send({ email: response });
    return;
  }

  res
    .status(HttpStatus.BAD_REQUEST)
    .send("Sorry, we do not have this company in our records");

  return;
};
