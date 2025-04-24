const history = [];

function add(a, b) {
  const result = a + b;
  history.push(a + ' + ' + b + ' = ' + result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  history.push(a + ' - ' + b + ' = ' + result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  history.push(a + ' * ' + b + ' = ' + result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    history.push(a + ' / ' + b + ' = Cannot divide by 0');
    return 'Cannot divide by 0';
  }
  const result = a / b;
  history.push(a + ' / ' + b + ' = ' + result);
  return result;
}

add(5,5);
console.log(history);


