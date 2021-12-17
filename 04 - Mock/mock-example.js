const axios = require('axios');

const _fetchData = async (id) => {
    console.log('called');
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return results;
};

function _loopThrough(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}


const _fetchDataMain = () => {
    const result = _fetchData(1);
    return result;
}

module.exports = {
    fetchData:   _fetchData,
    loopThrough: _loopThrough,
    fetchDataMain: _fetchDataMain,
}
