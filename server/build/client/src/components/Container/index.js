"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const Form_1 = __importDefault(require("../Form"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Container = () => {
    const [isExpanded, setIsExpanded] = react_1.useState(false);
    return (<div className={styles_module_scss_1.default.container}>
            <div className={classnames_1.default(styles_module_scss_1.default.wrapper, { [styles_module_scss_1.default.isExpanded]: isExpanded })}>
                {isExpanded ? <Form_1.default /> : <button data-test="start-button" className={styles_module_scss_1.default.startButton} onClick={() => setIsExpanded(true)}>Start</button>}
            </div>
        </div>);
};
exports.default = Container;
