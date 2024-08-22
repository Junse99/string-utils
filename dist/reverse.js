"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
var reverse_1 = __importDefault(require("lodash/reverse"));
/**
 * Invierte una cadena de texto.
 *
 * @param {string} str - La cadena de texto que se va a invertir.
 * @returns {string} - La cadena de texto invertida.
 */
var reverse = function (str) { return (0, reverse_1.default)(str.split('')).join(''); };
exports.reverse = reverse;
