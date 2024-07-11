function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	if (number2 === 0) {
		return 'Error: Division by zero';
	}
	return number1 / number2;
}

// Get references to elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultSpan = document.getElementById('calculation-result');

// Add event listeners to operation buttons
const addButton = document.getElementById('add');
addButton.addEventListener('click', function () {
	const num1 = parseFloat(number1Input.value) || 0;
	const num2 = parseFloat(number2Input.value) || 0;
	const result = add(num1, num2);
	resultSpan.textContent = result;
});

const subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click', function () {
	const num1 = parseFloat(number1Input.value) || 0;
	const num2 = parseFloat(number2Input.value) || 0;
	const result = subtract(num1, num2);
	resultSpan.textContent = result;
});

const multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', function () {
	const num1 = parseFloat(number1Input.value) || 0;
	const num2 = parseFloat(number2Input.value) || 0;
	const result = multiply(num1, num2);
	resultSpan.textContent = result;
});

const divideButton = document.getElementById('divide');
divideButton.addEventListener('click', function () {
	const num1 = parseFloat(number1Input.value) || 0;
	const num2 = parseFloat(number2Input.value) || 0;
	const result = divide(num1, num2);
	resultSpan.textContent = result;
});