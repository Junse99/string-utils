"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test('capitalize should capitalize the first letter', function () {
    expect((0, index_1.capitalize)('hello')).toBe('Hello');
});
test('reverse should reverse the string', function () {
    expect((0, index_1.reverse)('hello')).toBe('olleh');
});
test('kebabCase should convert string to kebab-case', function () {
    expect((0, index_1.kebabCase)('Hello World')).toBe('hello-world');
});
test('truncate should truncate string to specified length', function () {
    expect((0, index_1.truncate)('This is a long string', 12)).toBe('This is a...');
});
