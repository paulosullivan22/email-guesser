"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompany = exports.createCompany = exports.createDbClient = void 0;
var dbClient_1 = require("./dbClient");
Object.defineProperty(exports, "createDbClient", { enumerable: true, get: function () { return dbClient_1.createDbClient; } });
var createCompany_1 = require("./createCompany");
Object.defineProperty(exports, "createCompany", { enumerable: true, get: function () { return __importDefault(createCompany_1).default; } });
var getCompany_1 = require("./getCompany");
Object.defineProperty(exports, "getCompany", { enumerable: true, get: function () { return __importDefault(getCompany_1).default; } });
