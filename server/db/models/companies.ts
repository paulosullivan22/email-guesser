import { default as sq, Sequelize } from "sequelize";

import { DbTableName } from "../../constants";

export const dbSetupCompaniesModel: (dbClient: Sequelize) => void = (dbClient: Sequelize) => {
  dbClient.define(
    DbTableName.Companies,
    {
      id: {
        type: sq.UUID,
        primaryKey: true,
        defaultValue: sq.UUIDV4,
      },
      company: {
        type: sq.STRING(),
        allowNull: false,
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
    },
    {
      tableName: DbTableName.Companies,
      timestamps: true,
    }
  );
}
