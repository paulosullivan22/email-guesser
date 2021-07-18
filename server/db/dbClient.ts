import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

import { dbSetupCompaniesModel } from "./models";

class DbClient {
  static instance: Sequelize;

  public static getInstance(): Sequelize {
    if (typeof DbClient.instance === "undefined") {
      DbClient.instance = new Sequelize(
        process.env.DB_URL ?? ''
      );
      dbSetupCompaniesModel(DbClient.instance);
    }

    return DbClient.instance;
  }
}

export const createDbClient: () => Sequelize = () => {
  return DbClient.getInstance();
};
