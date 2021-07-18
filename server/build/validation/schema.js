"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    name: joi_1.default.string()
        .pattern(new RegExp(/^(([a-z]+)\s([a-z]+))$/))
        .required(),
    company: joi_1.default.string()
        .pattern(new RegExp(/^([a-z]+)\.([a-z]{1,3})$/))
        .required(),
});
exports.default = schema;
