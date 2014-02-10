describe("A suite", function () {
	var math01;

	beforeEach(function() {
		math01 = new Math01();
	});


	it("0 in 2-based string should be translated to '0'", function () {
		expect(math01.integerToBaseString(0, 2)).toBe('0');
	});

	it("1 in 2-based string should be translated to '1'", function () {
		expect(math01.integerToBaseString(1, 2)).toBe('1');
	});

	it("2 in 2-based string should be translated to '10'", function () {
		expect(math01.integerToBaseString(2, 2)).toBe('10');
	});

	it("4 in 2-based string should be translated to '100'", function () {
		expect(math01.integerToBaseString(4, 2)).toBe('100');
	});

	it("6 in 2-based string should be translated to '110'", function () {
		expect(math01.integerToBaseString(6, 2)).toBe('110');
	});

	it("7 in 2-based string should be translated to '111'", function () {
		expect(math01.integerToBaseString(7, 2)).toBe('111');
	});

	it("14 in 3-based string should be translated to '11'", function () {
		// 14 = 9 + 3 + 2
		expect(math01.integerToBaseString(14, 3)).toBe('112');
	});

});
