const fishbash = require('../src/fishbash.js');

QUnit.module('fishbash');

QUnit.test.each('Test Fishbash', assert => {
	assert.equal('fish',fishbash(3), 'fish');
});


