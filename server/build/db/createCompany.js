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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const constants_1 = require("../constants");
const createCompany = (dbClient, data) => __awaiter(void 0, void 0, void 0, function* () {
    let company = null;
    try {
        company = yield dbClient.model(constants_1.DbTableName.Companies).create(data);
    }
    catch (error) {
        if (!(error instanceof sequelize_1.UniqueConstraintError)) {
            throw new Error(error);
        }
    }
    return company;
});
exports.default = createCompany;
