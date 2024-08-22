import lodashReverse from 'lodash/reverse';

/**
 * Invierte una cadena de texto.
 * 
 * @param {string} str - La cadena de texto que se va a invertir.
 * @returns {string} - La cadena de texto invertida.
 */
export const reverse = (str: string): string  => lodashReverse(str.split('')).join('');
