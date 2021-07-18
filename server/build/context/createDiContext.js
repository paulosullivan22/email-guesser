"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const createDiContext = () => {
    const dbClient = db_1.createDbClient();
    return {
        dbClient,
    };
};
exports.default = createDiContext;
