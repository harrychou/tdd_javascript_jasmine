function Math01 () {}

Math01.prototype.integerToBaseString = function(number, base) {
	// base should be an integer that is greater than 1
	assert(base >= 2, 'base should be greater than 2');
	assert(isInt(number), 'number should be integer');
	assert(isInt(base), 'base should be integer');

	if (number === 0) return '0';

	var result = '';

	while(number >= 1)
	{
		var remander = (number % base);
		var number = parseInt(number / base, 10);
		result = remander + result;
	}

	return result;
};

Math01.prototype.baseStringToDecimalInt = function(baseString, base) {
	// base should be an integer that is greater than 1
	assert(base >= 2, 'base should be greater than 2');
	assert(isInt(base), 'base should be integer');

	if (number === 0) return '0';

	var result = '';

	while(number >= 1)
	{
		var remander = (number % base);
		var number = parseInt(number / base, 10);
		result = remander + result;
	}

	return result;
};

function isInt(n) {
	return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
} 

function assert(boolValue, errorMsg) {
	if (!boolValue) {
		if (errorMsg) {
			alert(errorMsg);
		} else {
			alert('assert failed');
		}
	}
}
