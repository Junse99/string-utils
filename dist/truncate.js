"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = void 0;
var truncate_1 = __importDefault(require("lodash/truncate"));
/**
 * Trunca una cadena a una longitud específica.
 *
 * @param {string} str - La cadena de texto que se va a cortar.
 * @returns {string} - La cadena de texto cortada.
 */
var truncate = function (str, length) { return (0, truncate_1.default)(str, { length: length }); };
exports.truncate = truncate;
