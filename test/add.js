const add = require('../add.js');

QUnit.module('add');

QUnit.test('two numbers', assert => {
	assert.equal(add(1,2),3);
});

QUnit.test('6 + 3 = 9', assert => {
	assert.equal(add(6,3),9);
});

