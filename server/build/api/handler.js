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
exports.handler = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const db_1 = require("../db");
const processors_1 = require("../processors");
const constants_1 = require("../constants");
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dbClient } = req.diContext;
    const { name, company } = req.body;
    let companySearchResult;
    try {
        companySearchResult = yield db_1.getCompany(dbClient, company);
    }
    catch (error) {
        res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR);
        return;
    }
    let response;
    if (companySearchResult) {
        const { emailFormat } = companySearchResult.dataValues;
        response = processors_1.formatFullNameEmail(name, company);
        if (emailFormat === constants_1.EmailFormat.FullName) {
            res.status(http_status_codes_1.default.OK).send({ email: response });
            return;
        }
        response = processors_1.formatFirstNameInitialEmail(name, company);
        res.status(http_status_codes_1.default.OK).send({ email: response });
        return;
    }
    res
        .status(http_status_codes_1.default.BAD_REQUEST)
        .send("Sorry, we do not have this company in our records");
    return;
});
exports.handler = handler;
