import { sayHello } from './common';

describe('Test example', () => {
  it('true should be true', () => {
    expect(sayHello()).toBe('hello');
    expect(sayHello()).not.toBe('hello world');
  });
});
