import lodashCapitalize  from 'lodash/capitalize';

/**
 * Capitaliza la primera letra de una cadena de texto.
 * 
 * @param {string} str - La cadena de texto que se va a capitalizar.
 * @returns {string} - La cadena de texto con la primera letra en mayúscula.
 */
export const capitalize = (str: string): string  => lodashCapitalize(str);