"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
var lodash_1 = require("lodash");
/**
 * Invierte una cadena de texto.
 *
 * @param {string} str - La cadena de texto que se va a invertir.
 * @returns {string} - La cadena de texto invertida.
 */
var reverse = function (str) { return (0, lodash_1.join)((0, lodash_1.reverse)((0, lodash_1.split)(str, '')), ''); };
exports.reverse = reverse;
