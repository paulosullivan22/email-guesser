import { default as sq, QueryInterface, Sequelize } from "sequelize";

import { createDbClient } from "../db";
import { DbTableName } from "../constants";

const dbClient: Sequelize = createDbClient();

const up: () => Promise<void> = async () => {
  const db: QueryInterface = dbClient.getQueryInterface();

  await db.createTable(DbTableName.Companies, {
    id: {
      type: sq.UUID,
      primaryKey: true,
      defaultValue: sq.UUIDV4,
    },
    company: {
      type: sq.STRING(),
      allowNull: false,
      unique: true,
    },
    emailFormat: {
      type: sq.STRING(),
      allowNull: false,
    },
    createdAt: {
      type: sq.DATE,
      allowNull: false,
      defaultValue: sq.literal("NOW()"),
    },
    updatedAt: {
      type: sq.DATE,
      allowNull: false,
      defaultValue: sq.literal("NOW()"),
    },
  });
};

up()