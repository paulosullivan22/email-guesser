import { QueryInterface, Sequelize } from "sequelize";

import { createDbClient } from "../db";
import { DbTableName } from "../constants";

const dbClient: Sequelize = createDbClient();

const down: () => Promise<void> = async () => {
  const db: QueryInterface = dbClient.getQueryInterface();

  await db.dropTable(DbTableName.Companies);
};

down()