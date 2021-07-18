"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSetupCompaniesModel = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const constants_1 = require("../../constants");
const dbSetupCompaniesModel = (dbClient) => {
    dbClient.define(constants_1.DbTableName.Companies, {
        id: {
            type: sequelize_1.default.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.default.UUIDV4,
        },
        company: {
            type: sequelize_1.default.STRING(),
            allowNull: false,
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
    }, {
        tableName: constants_1.DbTableName.Companies,
        timestamps: true,
    });
};
exports.dbSetupCompaniesModel = dbSetupCompaniesModel;
