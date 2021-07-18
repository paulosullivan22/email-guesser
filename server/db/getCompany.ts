import { Sequelize, Model } from "sequelize";

import { DbTableName } from "../constants";

const getCompany: (
  dbClient: Sequelize,
  domain: string
) => Promise<Model | null> = async (dbClient: Sequelize, domain: string) => {
  let company: Model | null = null;

  try {
    company = await dbClient
      .model(DbTableName.Companies)
      .findOne({ where: { company: domain } });
  } catch (error) {
    throw new Error(error);
  }

  return company;
};

export default getCompany;
