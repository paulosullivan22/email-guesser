"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDbClient = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const models_1 = require("./models");
class DbClient {
    static getInstance() {
        var _a;
        if (typeof DbClient.instance === "undefined") {
            DbClient.instance = new sequelize_1.Sequelize((_a = process.env.DB_URL) !== null && _a !== void 0 ? _a : '');
            models_1.dbSetupCompaniesModel(DbClient.instance);
        }
        return DbClient.instance;
    }
}
const createDbClient = () => {
    return DbClient.getInstance();
};
exports.createDbClient = createDbClient;
