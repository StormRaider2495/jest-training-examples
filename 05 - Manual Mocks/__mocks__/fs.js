const fs = jest.createMockFromModule('fs');

function readdirSync(directoryPath) {
    return [];
}

fs.readdirSync = readdirSync;

module.exports = fs;