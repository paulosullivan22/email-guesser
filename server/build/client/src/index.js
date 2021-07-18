"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Container_1 = __importDefault(require("./components/Container"));
react_dom_1.default.render(<react_1.default.StrictMode>
    <Container_1.default />
  </react_1.default.StrictMode>, document.getElementById("root"));
