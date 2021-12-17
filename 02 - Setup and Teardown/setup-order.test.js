beforeAll(() => {
    console.log("before all");
});

afterAll(() => {
    console.log("after all");
})

beforeEach(() => {
    console.log("before each");
});

afterEach(() => {
    console.log("after each");
});

describe('Main Test Group', () => {

    beforeAll(() => {
        console.log("before all inside main test group");
    });

    afterAll(() => {
        console.log("after all inside main test group");
    })

    beforeEach(() => {
        console.log("before each inside main test group");
    });

    afterEach(() => {
        console.log("after each inside main test group");
    });

    describe('Sub Test Group 1', () => {

        beforeAll(() => {
            console.log("before all inside Sub Test Group 1");
        });

        afterAll(() => {
            console.log("after all inside Sub Test Group 1");
        })

        beforeEach(() => {
            console.log("before each inside Sub Test Group 1");
        });

        afterEach(() => {
            console.log("after each inside Sub Test Group 1");
        });

        it.only('Sub 1 Test it 1', () => {
            console.log("Sub 1 Test it 1");
        });

        it('Sub 1Test it 2', () => {
            console.log("Sub 1 Test it 2");
        });

    });

});

it.only('Test Block', () => {
    console.log("it block outside describe");
});
