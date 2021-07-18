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
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const schema_1 = __importDefault(require("./schema"));
const createValidationMiddleware = () => {
    return function handleRequest(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && Object.keys(req.body).length > 0) {
                const validationResult = schema_1.default.validate(req.body);
                if (validationResult.error) {
                    res.status(http_status_codes_1.default.BAD_REQUEST).send(validationResult.error.details[0].message);
                    return;
                }
            }
            next();
        });
    };
};
exports.default = createValidationMiddleware;
