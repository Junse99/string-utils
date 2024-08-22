"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = void 0;
var kebabCase_1 = __importDefault(require("lodash/kebabCase"));
/**
 * Convierte una cadena en formato kebab-case.
 *
 * @param {string} str - La cadena de texto que se va a convertir en kebab-case.
 * @returns {string} - La cadena de texto convertida en kebab-case.
 */
var kebabCase = function (str) { return (0, kebabCase_1.default)(str); };
exports.kebabCase = kebabCase;
