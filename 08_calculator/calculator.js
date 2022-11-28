const add = function(...numbers) {
  var sum = 0;
	numbers.forEach(number => {
    sum+=number;
  });
  return sum;
};

const subtract = function(numA,numB) {
	return numA-numB;
};

const sum = function(numbers) {
  return numbers.reduce((a,b)=>a+b,0);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
