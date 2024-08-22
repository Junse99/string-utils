import lodashTruncate  from 'lodash/truncate';

/**
 * Trunca una cadena a una longitud específica.
 * 
 * @param {string} str - La cadena de texto que se va a cortar.
 * @returns {string} - La cadena de texto cortada.
 */
export const truncate = (str: string, length: number): string =>  lodashTruncate(str, { length });