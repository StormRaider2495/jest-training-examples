const http = require('http');

function request(id) {
    return new Promise(resolve => {
        // This is an example of an http request, for example to fetch
        // user data from an API.
        // This module is being mocked in __mocks__/request.js
        http.get({ path: `https://jsonplaceholder.typicode.com/todos/${id}` }, response => {
            let data = '';
            response.on('data', _data => (data += _data));
            response.on('end', () => resolve(data));
        });
    });
}

module.exports = request;