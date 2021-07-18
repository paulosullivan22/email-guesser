"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFirstNameInitialEmail = void 0;
const formatFirstNameInitialEmail = (fullName, company) => {
    const splitName = fullName.split(" ");
    const firstNameInitial = splitName[0][0];
    return firstNameInitial + splitName[1] + "@" + company;
};
exports.formatFirstNameInitialEmail = formatFirstNameInitialEmail;
