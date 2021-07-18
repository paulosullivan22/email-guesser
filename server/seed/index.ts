import { Sequelize } from "sequelize";

import { checkEmailFormatType } from "../processors/checkEmailFormatType";
import { createCompany, createDbClient } from "../db";
import { data } from "./data";

const seed: () => void = () => {
  const dbClient: Sequelize = createDbClient();

  Object.entries(data).map(async ([name, email]: string[]) => {
    const emailFormat: string = checkEmailFormatType(name, email);
    const company: string = email.split("@")[1];

    try {
      await createCompany(dbClient, { company, emailFormat });
    } catch (error) {
      throw new Error(error);
    }
  });
};

seed()
