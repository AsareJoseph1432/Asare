let expression = '';

function press(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    document.getElementById('result').value = eval(expression);
    expression = ''; // Clear after calculation
  } catch (error) {
    document.getElementById('result').value = 'Error';
    expression = ''; // Reset after error
  }
}
