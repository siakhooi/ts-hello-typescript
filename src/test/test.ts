import {hello} from '../main/index';

test('default', () => {
  expect(hello()).toBe('Hello TypeScript');
});

test('world', () => {
  expect(hello('World')).toBe('Hello World');
});
test('Earth', () => {
  expect(hello('Earth')).toBe('Hello Earth');
});
