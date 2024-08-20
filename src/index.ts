// src/index.ts

/**
 * Capitaliza la primera letra de una cadena.
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Invierte una cadena de texto.
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Convierte una cadena en formato kebab-case.
 */
export function kebabCase(str: string): string {
  return str
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/**
 * Trunca una cadena a una longitud específica.
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}