const fileSummarizer = require("./file-summarizer");

jest.mock('fs');

test('should return empty array', () => {
    const output = fileSummarizer.summarizeFilesInDirectorySync();

    expect(output.length).toBe(0);
});