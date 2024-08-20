"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.reverse = reverse;
exports.kebabCase = kebabCase;
exports.truncate = truncate;
/**
 * Capitaliza la primera letra de una cadena.
 */
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Invierte una cadena de texto.
 */
function reverse(str) {
    return str.split('').reverse().join('');
}
/**
 * Convierte una cadena en formato kebab-case.
 */
function kebabCase(str) {
    return str
        .replace(/\s+/g, '-')
        .toLowerCase();
}
/**
 * Trunca una cadena a una longitud específica.
 */
function truncate(str, length) {
    if (str.length <= length)
        return str;
    return str.slice(0, length) + '...';
}
