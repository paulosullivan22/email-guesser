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
it('should not initially render form', () => {
    // Arrange
    const wrapper = enzyme_1.shallow(<index_1.default />);
    const form = wrapper.find({ "data-test": "form" });
    // Assert
    expect(form).toHaveLength(0);
});
it('renders form when button is clicked', () => {
    // Arrange
    const wrapper = enzyme_1.shallow(<index_1.default />);
    const startButton = wrapper.find({ "data-test": "start-button" });
    const form = wrapper.find({ "data-test": "form" });
    // Act
    startButton.simulate('click');
    // Assert
    setTimeout(() => {
        expect(form).toHaveLength(1);
    }, 0);
});
