"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const index_1 = __importDefault(require("./index"));
it('renders without error', () => {
    // Arrange
    const wrapper = enzyme_1.shallow(<index_1.default />);
    // Assert
    expect(wrapper.exists()).toBe(true);
});
it('renders the basic fields', () => {
    // Arrange
    const wrapper = enzyme_1.shallow(<index_1.default />);
    const nameInput = wrapper.find({ name: 'fullName' });
    const companyInput = wrapper.find({ name: 'company' });
    const submitButton = wrapper.find({ type: 'submit' });
    // Assert
    expect(nameInput).toHaveLength(1);
    expect(companyInput).toHaveLength(1);
    expect(submitButton).toHaveLength(1);
});
