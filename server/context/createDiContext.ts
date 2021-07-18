import { Sequelize } from "sequelize";

import { IDiContext } from "../interfaces";
import { createDbClient } from "../db";

const createDiContext: () => IDiContext = () => {
  const dbClient: Sequelize = createDbClient();

  return {
    dbClient,
  };
};

export default createDiContext;
