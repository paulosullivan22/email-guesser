"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmailFormatType = void 0;
const constants_1 = require("../constants");
const checkEmailFormatType = (name, email) => {
    const firstName = name.split(" ")[0];
    if (email.includes(firstName.toLowerCase())) {
        return constants_1.EmailFormat.FullName;
    }
    return constants_1.EmailFormat.FirstNameInitial;
};
exports.checkEmailFormatType = checkEmailFormatType;
