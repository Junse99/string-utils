"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
var capitalize_1 = __importDefault(require("lodash/capitalize"));
/**
 * Capitaliza la primera letra de una cadena de texto.
 *
 * @param {string} str - La cadena de texto que se va a capitalizar.
 * @returns {string} - La cadena de texto con la primera letra en mayúscula.
 */
var capitalize = function (str) { return (0, capitalize_1.default)(str); };
exports.capitalize = capitalize;
