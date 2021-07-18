"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbSetupContactsModel = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const constants_1 = require("../../constants");
function dbSetupContactsModel(dbClient) {
    dbClient.define(constants_1.DbTableName.Contacts, {
        id: {
            type: sequelize_1.default.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.default.UUIDV4
        },
        name: {
            type: sequelize_1.default.STRING(),
            allowNull: false
        },
        company: {
            type: sequelize_1.default.STRING(),
            allowNull: false
        },
        createdAt: {
            type: sequelize_1.default.DATE,
            allowNull: false,
            defaultValue: sequelize_1.default.literal('NOW()')
        },
        updatedAt: {
            type: sequelize_1.default.DATE,
            allowNull: false,
            defaultValue: sequelize_1.default.literal('NOW()')
        }
    }, {
        tableName: constants_1.DbTableName.Contacts,
        timestamps: true
    });
}
exports.dbSetupContactsModel = dbSetupContactsModel;
