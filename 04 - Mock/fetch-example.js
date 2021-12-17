async function fetchExample(id) {
    try {
        const result = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        return await result.json();
    } catch (e) {
        return null;
    }
}

module.exports = fetchExample;