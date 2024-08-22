"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = void 0;
var _ = require('lodash');
/**
 * Convierte una cadena en formato kebab-case.
 *
 * @param {string} str - La cadena de texto que se va a convertir en kebab-case.
 * @returns {string} - La cadena de texto convertida en kebab-case.
 */
var kebabCase = function (str) { return _.lodashKebabCase(str); };
exports.kebabCase = kebabCase;
