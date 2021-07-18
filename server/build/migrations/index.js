"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
// check import vs require
const sequelize_1 = __importStar(require("sequelize"));
const constants_1 = require("../constants");
const dbClient = new sequelize_1.Sequelize('postgresql://paulosullivan:password@0.0.0.0:5432/email_guesser');
function up() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = dbClient.getQueryInterface();
        yield db.createTable(constants_1.DbTableName.Companies, {
            id: {
                type: sequelize_1.default.UUID,
                primaryKey: true,
                defaultValue: sequelize_1.default.UUIDV4
            },
            company: {
                type: sequelize_1.default.STRING(),
                allowNull: false,
                unique: true
            },
            emailFormat: {
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
        });
        // make company domain unique
        // await db.addIndex('companies', ['company'], { indicesType: 'UNIQUE' })
        yield db.createTable(constants_1.DbTableName.Contacts, {
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
        });
    });
}
exports.up = up;
function down() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = dbClient.getQueryInterface();
        // await db.removeIndex('claims', ['policyId'])
        yield db.dropTable(constants_1.DbTableName.Companies);
        yield db.dropTable(constants_1.DbTableName.Contacts);
    });
}
exports.down = down;
up();
