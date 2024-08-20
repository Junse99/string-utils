import { capitalize, reverse, kebabCase, truncate } from '../index';

test('capitalize should capitalize the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse should reverse the string', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('kebabCase should convert string to kebab-case', () => {
  expect(kebabCase('Hello World')).toBe('hello-world');
});

test('truncate should truncate string to specified length', () => {
  expect(truncate('This is a long string', 9)).toBe('This is a...');
});