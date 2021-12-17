const axios       = require('axios');
const mockExample = require('./mock-example');



it('mock callback', () => {
    const mockCallback = jest.fn((x) => 42 + x);

    mockExample.loopThrough([0, 1], mockCallback);

    console.log(mockCallback.mock.results);

    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.calls[0][0]).toBe(0);

    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(
        42
    );
});



it('return mock', () => {
    const mock = jest.fn();

    mock
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);

    const results = mock();
    const results2 = mock();

    expect(results).toBe(true);
    expect(results2).toBe(false);
});

it('mock axios module', async () => {
    jest.spyOn(axios, "get").mockReturnValue({
        id: 18,
        todo: 'Do youtube',
    });

    const result = await fetchData(1);

    expect(result.id).toBe(18); // value passed in line 63 wont

});

it('mock modules or custom functions with mockImplementation', async () => {
    jest.spyOn(mockExample, 'fetchData').mockImplementation(
        () => Promise.resolve({
            id: 18,
            todo: 'Do youtube',
    }));

    const results = await mockExample.fetchData(1);

    expect(results.todo).toBe('Do youtube');
    expect(results.id).toBe(18);
});