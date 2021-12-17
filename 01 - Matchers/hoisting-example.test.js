const hoistingExample = require('./hoisting-example');

it('should return the set number', () => {
    expect(hoistingExample()).toBe(5); // This will fail
});

