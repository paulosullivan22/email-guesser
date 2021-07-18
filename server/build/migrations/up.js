"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_1 = require("../db");
const constants_1 = require("../constants");
const dbClient = db_1.createDbClient();
const up = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = dbClient.getQueryInterface();
    yield db.createTable(constants_1.DbTableName.Companies, {
        id: {
            type: sequelize_1.default.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.default.UUIDV4,
        },
        company: {
            type: sequelize_1.default.STRING(),
            allowNull: false,
            unique: true,
        },
        emailFormat: {
            type: sequelize_1.default.STRING(),
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.default.DATE,
            allowNull: false,
            defaultValue: sequelize_1.default.literal("NOW()"),
        },
        updatedAt: {
            type: sequelize_1.default.DATE,
            allowNull: false,
            defaultValue: sequelize_1.default.literal("NOW()"),
        },
    });
});
up();
