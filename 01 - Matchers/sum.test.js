const sum = require('./sum');

it('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

it('adds 1 + 2 to NOT equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

it('adds 1 + "3" to equal 13', () => {
	expect(sum(1, "3")).toBe("13");
});

it('object assignment', () => {
	const data = { one: 1 };
	data['two'] = 2;
	expect(data).toEqual({ one: 1, two: 2 });
});

it('adding positive numbers is not zero', () => {
	for (let a = 1; a < 10; a++) {
		for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0);
		}
	}
});

// TRUTHY AND FALSEY

it('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

it('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});

// NUMBERS

it('two plus two', () => {
	const value = 2 + 2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);

	// toBe and toEqual are equivalent for numbers
	expect(value).toBe(4);
	expect(value).toEqual(4);
});

it('adding floating point numbers', () => {
	const value = 0.1 + 0.2;
	//expect(value).toBe(0.3);           This won't work because of rounding error
	expect(value).toBeCloseTo(0.3); // This works.
});

// STRINGS //

it('there is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

it('but there is a "stop" in Christoph', () => {
	expect('Christoph').toMatch(/stop/);
});

// ARRAYS //

describe.only('Array testing', () => {
	let shoppingList;

	beforeEach(() => {
		shoppingList = [
			'diapers',
			'kleenex',
			'trash bags',
			'paper towels',
			'milk',
		];
	});

	it('the shopping list has milk on it', () => {;
		expect(shoppingList).toContain('milk');
		expect(new Set(shoppingList)).toContain('milk');
	});

	it('the shopping list has kleenex on it', () => {
		expect(shoppingList).toContain('kleenex');
		expect(new Set(shoppingList)).toContain('kleenex');
	});

	it('the shopping list has diapers on it', () => {
		expect(shoppingList).toContain('diapers');
		expect(new Set(shoppingList)).toContain('diapers');
	});

	it('the shopping list update length on pushing new item', () => {
		shoppingList.push("bread");
		expect(shoppingList.length).toBe(6);
	});

	it('the shopping list length shoould be 5 which is the initial length', () => {
		expect(shoppingList.length).toBe(5);
		expect(shoppingList).not.toContain('bread');
		expect(new Set(shoppingList)).not.toContain('bread');
	});
});



// REGEX //

describe('Regex group', () => {

	describe('demo tests', () => {

		it('There is no I in team', () => {
			expect('team').not.toMatch(/I/i);
		});

	});

	describe('password testing', () => {

		it('Password should contain minimum 8 characters, at least one letter and one number', () => {
			const passwordValue = "Regex123";
			expect(passwordValue).toMatch(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g);
		});

	});

});


// EXCEPTIONS //

function compileAndroidCode() {
	throw new Error('you are using the wrong JDK');
}

it('compiling android goes as expected', () => {
	expect(() => compileAndroidCode()).toThrow();



	expect(() => compileAndroidCode()).toThrow(
		Error
	);

	// You can also use the exact error message
	expect(() => compileAndroidCode()).toThrow(
		'you are using the wrong JDK'
	);

	//  Or you can also use regexp
	expect(() => compileAndroidCode()).toThrow(
		/JDK/
	);
});

function getUndefinedError() {
	throw new Error('Undefined of null');
}

it('received Undefined Error ', () => {
	expect(() => getUndefinedError()).toThrow(Error);
});
