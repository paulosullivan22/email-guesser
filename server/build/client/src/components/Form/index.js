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
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Form = () => {
    const [nameValue, setNameValue] = react_1.useState("");
    const [companyValue, setCompanyValue] = react_1.useState("");
    const [response, setResponse] = react_1.useState("");
    const [errorMessage, setErrorMessage] = react_1.useState("");
    const [isProcessing, setIsProcessing] = react_1.useState(false);
    const [isExpanded, setIsExpanded] = react_1.useState(false);
    react_1.useEffect(() => {
        setIsExpanded(true);
    }, [isExpanded]);
    const handleChange = (changeFunc, value) => {
        if (response !== '') {
            setResponse('');
        }
        if (errorMessage !== '') {
            setErrorMessage('');
        }
        changeFunc(value);
    };
    const resetForm = () => {
        setNameValue("");
        setCompanyValue("");
        setIsProcessing(false);
    };
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        setIsProcessing(true);
        let response;
        try {
            response = yield axios_1.default.post(`${process.env.API_URL}/handler`, { name: nameValue.toLowerCase(), company: companyValue.toLowerCase() }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        catch (error) {
            setErrorMessage(error.response.data);
            resetForm();
            return;
        }
        setResponse(response.data.email);
        resetForm();
    });
    return (<form data-test="form" onSubmit={handleSubmit} className={classnames_1.default(styles_module_scss_1.default.container, { [styles_module_scss_1.default.isExpanded]: isExpanded })}>
      <input name="fullName" placeholder="Full name e.g. John Smith" value={nameValue} onChange={(event) => handleChange(setNameValue, event.target.value)}/>
      <input name="company" placeholder="Company domain e.g. google.com" value={companyValue} onChange={(event) => handleChange(setCompanyValue, event.target.value)}/>
      <button type="submit" disabled={isProcessing}>
        Submit
      </button>
      {response !== '' ? <p data-test="response-email">{response}</p> : null}
      {errorMessage !== '' ? <p data-test="error">{errorMessage}</p> : null}
    </form>);
};
exports.default = Form;
