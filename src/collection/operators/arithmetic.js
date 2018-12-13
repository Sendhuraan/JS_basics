(function() {

	var assert = require('chai').assert;

	describe('Arithmetic Operators', function() {

		describe('\'+\' operator', function() {

			describe('Addition (+)', function() {

				it('adds integer values', function() {
					var output = 5 + 5;

					assert.equal(output, 10);
				});

				it('adds floating point as IEEE 754', function() {
					var output = 0.1 + 0.2;

					assert.equal(output, 0.30000000000000004);
				});
				
				it('concatenates string values', function() {
					var output = 'Hi ' + 'there';
					
					assert.equal(output, 'Hi there');
				});

				it('when operated with boolean values, it tries to coerce to a boolean value. It interprets true as 1 and false as 0', function() {
					var output = true + 1;

					assert.equal(output, 2);
				});

				it('concatenates number and string values. The \'+\' operator is overloaded. If one of the operands is a string, then it tries to coerce other operand to a string, otherwise it performs numerical operations', function() {
					var output = 2 + 'foo';

					assert.equal(output, '2foo');
				});
				
			});

			describe('Unary (+)', function() {

				it('when used as unary operator, it tries to coerce the operand into a number. Although unary (-) also tries to coerce to number, but unary (+) is fast. Hence it can be used to convert a string to a number', function() {
					var a = '42';
					var output = +a;

					assert.equal(output, 42);
					
				});

				it('During the coercion, if the conversion fails, it results in NaN', function() {
					var a = 'hello';
					var output = +a;

					assert.equal(isNaN(output), true);
					
				});
				
			});
			
		});

		describe('\'-\' operator', function() {

			describe('Subtraction (-)', function() {

				it('subtracts two numbers', function() {
					var c = 10 - 5;

					assert.equal(c, 5);
				});

				it('when operated on operands other than numbers, it tries to coerce to a number, not as a string as \'+\' operator does. when the number conversion fails, it returns NaN', function () {
					var a = 'foo' - 2;

					assert.equal(isNaN(a), true);
				});
				
			});

			describe('Unary (-)', function() {

				it('when operated as unary operator on numbers, it negates the value of the number', function () {
					var output = -2;

					assert.equal(output, -2);
				});
				
			});

			
		});

		describe('\'*\' operator', function() {

			it('description', function() {
				
			});
			
		});

		describe('\'/\' operator', function() {
			
			it('description', function() {
				
			});
			
		});

		describe('\'%\' operator', function() {
			
			it('description', function() {
				
			});
			
		});

		describe('\'**\' operator', function() {
			
			it('description', function() {
				
			});
			
		});

		describe('\'++\' operator', function() {
			
			it('description', function() {
				
			});
			
		});

		describe('\'--\' operator', function() {
			
			it('description', function() {
				
			});
			
		});
		
	});

})();