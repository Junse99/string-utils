"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
var lodash_1 = require("lodash");
/**
 * Capitaliza la primera letra de una cadena de texto.
 *
 * @param {string} str - La cadena de texto que se va a capitalizar.
 * @returns {string} - La cadena de texto con la primera letra en mayúscula.
 */
var capitalize = function (str) { return (0, lodash_1.capitalize)(str); };
exports.capitalize = capitalize;
