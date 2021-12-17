const requestFunc = require("./http-request");

it('should return correct todo', (done) => {
	requestFunc(1).then((todo) => {
		try {
			expect(todo).toBe(1);
			done();
		} catch (error) {
			done(error);
		}
	});
});