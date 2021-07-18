import { UniqueConstraintError, Sequelize, Model } from "sequelize";

import { DbTableName } from "../constants";
import { ICompany } from "../interfaces";

const createCompany: (
  dbClient: Sequelize,
  data: Partial<ICompany>
) => Promise<Model | null> = async (
  dbClient: Sequelize,
  data: Partial<ICompany>
) => {
  let company: Model | null = null;

  try {
    company = await dbClient.model(DbTableName.Companies).create(data);
  } catch (error) {
    if (!(error instanceof UniqueConstraintError)) {
      throw new Error(error);
    }
  }

  return company;
};

export default createCompany;
