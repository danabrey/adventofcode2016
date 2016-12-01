var followInstructions = require("../solution");
var assert = require('assert');
describe('followInstructions()', function() {
	it('R2, L3 is 5 blocks away', () => {
		var expectedOutcome = 5;
		var actualOutcome = followInstructions("R2, L3");
		assert.equal(actualOutcome, expectedOutcome);
	});
	it('R2, R2, R2 is 2 blocks away', () => {
		var expectedOutcome = 2;
		var actualOutcome = followInstructions("R2, R2, R2");
		assert.equal(actualOutcome, expectedOutcome);
	});
	it('R5, L5, R5, R3 is 12 blocks away', () => {
		var expectedOutcome = 12;
		var actualOutcome = followInstructions("R5, L5, R5, R3");
		assert.equal(actualOutcome, expectedOutcome);
	});
});
