const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber
	
};

const subtract = function(firstNumber, secondNumber) { 
  return firstNumber- secondNumber
  
};

const sum = function(arr) {
  let sum = 0
	let length = arr.length
  for (let i = 0; i <length; i++) {
    sum+= i
  }
  return sum
};

const multiply = function(arr) {
  let result = 1
	let length = arr.length
  for (let i = 0; i <length; i++) {
    result *= i
  }
  return result
};

const power = function(firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber)
	
};

const factorial = function(number) {
  let result =1
	for (let i = 1; i <= number ; i++) {
    result *=i
  }
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
