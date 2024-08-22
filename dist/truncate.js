"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = void 0;
var lodash_1 = require("lodash");
/**
 * Trunca una cadena a una longitud específica.
 *
 * @param {string} str - La cadena de texto que se va a cortar.
 * @returns {string} - La cadena de texto cortada.
 */
var truncate = function (str, length) { return (0, lodash_1.truncate)(str, { length: length }); };
exports.truncate = truncate;
