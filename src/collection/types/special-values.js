(function() {

	var assert = require('chai').assert;

	describe('Special Values', function() {
		
		it(`Classified into
			NaN (Not a Number)
			+Infinity
			-Infinity
			null
			undefined (void)
			+0
			-0 
			`);
		
	});

	describe('NaN (Not a Number)', function() {

		it('Whenever there is a numeric operation, if the operands are not number, the engine tries to convert it to a number. When the number conversion fails, it results in NaN. It is a special sentinel value, when the number conversion fails', function() {
			var output = 'a' / 2;

			assert.equal(Number.isNaN(output), true);
		});

		it('typeof NaN is a number, because if we try to do numeric operation and ended in NaN, It is expected to be a number', function() {
			var output = 'a' / 2;
			
			assert.equal(typeof output, 'number');
		});

		it('NaN when operated on any other operands will result in NaN', function() {
			var a = 'a' * 2;
			var output = a + 2;

			assert.equal(Number.isNaN(output), true);
		});

		it('It is the only value that is not equal to itself', function() {
			var a = 'a' * 2;
			var output = a + 2;

			assert.notEqual(output, a);
		});

		describe('Global isNaN Utility', function() {

			it('We need to have a way to check for NaN. It is by using global isNaN utility. But there is fatal flaw in this utility. isNaN before checking the value, it tries to converts the given value to a number and then checks to see if it resulted in NaN');

			it('returns true when used isNaN on a string. While we may expect it to give false, as given a string, we expect that isNaN(\'<String Value>\') to be false. But it first tries to convert the string into number, and it results in NaN, so it returns true', function() {
				assert.equal(isNaN('a'), true);
			});

		});

		describe('Number.isNaN Utility', function() {

			it('Fortunately, we have Number.isNaN() utility, which checks for NaN without converting it to a number');

			it('returns false when used Number.isNaN on a string', function() {
				assert.equal(Number.isNaN('a'), false);
			});
			
		});

	});
	
})();