import lodashKebabCase from 'lodash/kebabCase';

/**
 * Convierte una cadena en formato kebab-case.
 * 
 * @param {string} str - La cadena de texto que se va a convertir en kebab-case.
 * @returns {string} - La cadena de texto convertida en kebab-case.
 */
export const kebabCase = (str: string): string  => lodashKebabCase(str)
