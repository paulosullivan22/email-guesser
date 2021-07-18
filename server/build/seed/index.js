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
const checkEmailFormatType_1 = require("../processors/checkEmailFormatType");
const db_1 = require("../db");
const data_1 = require("./data");
const seed = () => {
    const dbClient = db_1.createDbClient();
    Object.entries(data_1.data).map(([name, email]) => __awaiter(void 0, void 0, void 0, function* () {
        const emailFormat = checkEmailFormatType_1.checkEmailFormatType(name, email);
        const company = email.split("@")[1];
        try {
            yield db_1.createCompany(dbClient, { company, emailFormat });
        }
        catch (error) {
            throw new Error(error);
        }
    }));
};
seed();
