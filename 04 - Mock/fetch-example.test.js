const fetchExample = require("./fetch-example");

// Global fetch - manual mock
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            id: 18,
            todo: 'Do youtube',
        }),
    })
);

it('should return id 1 when parameter passed is 1', async () => {
    const result = await fetchExample(1);
    expect(result.id).toBe(18);
});