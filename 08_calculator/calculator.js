const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	if (array.length === 0) {
    return 0;
  }
  else {
    return array.reduce((total, currentVal) => total + currentVal);
  }
};

const multiply = function(array) {
	if (array.length === 0) {
    return 0;
  }
  else {
    return array.reduce((total, currentVal) => total * currentVal);
  }
};

const power = function(operand, toPower) {
	return operand ** toPower;
};

const factorial = function(operand) {
	if (operand === 0) {
    return 1;
  }
  let operands = [];
  for (let i = 1; i <= operand; i++) {
    operands.push(i);
  }
  return operands.reduce((total, currentValue) => total * currentValue);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
