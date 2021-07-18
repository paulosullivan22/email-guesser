"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFullNameEmail = void 0;
const formatFullNameEmail = (fullName, company) => {
    return fullName.replace(/\s/g, "").toLowerCase() + "@" + company;
};
exports.formatFullNameEmail = formatFullNameEmail;
