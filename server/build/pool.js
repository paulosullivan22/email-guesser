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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = exports.sequelize = void 0;
// check import vs require
const sequelize_1 = __importStar(require("sequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize('postgresql://paulosullivan:password@0.0.0.0:5432/email_guesser');
function up() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = exports.sequelize.getQueryInterface();
        yield db.createTable('companies', {
            id: {
                type: sequelize_1.default.UUID,
                primaryKey: true,
                defaultValue: sequelize_1.default.UUIDV4
            }
        });
        // await db.addIndex('companies', ['id'], { indicesType: 'UNIQUE' })
    });
}
exports.up = up;
function down(dbClient) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = dbClient.getQueryInterface();
        // await db.removeIndex('claims', ['policyId'])
        yield db.dropTable('companies');
    });
}
exports.down = down;
