document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
  
    let currentInput = '';
    let currentOperator = '';
    let shouldResetDisplay = false;
  
    buttons.addEventListener('click', function (event) {
      const target = event.target;
  
      if (target.tagName === 'BUTTON') {
        const buttonText = target.textContent;
  
        if (target.classList.contains('operator')) {
          handleOperator(buttonText);
        } else if (target.classList.contains('equal')) {
          calculate();
        } else {
          handleNumber(buttonText);
        }
  
        updateDisplay();
      }
    });
  
    function handleNumber(num) {
      if (shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
      } else {
        currentInput += num;
      }
    }
  
    function handleOperator(operator) {
      if (currentOperator !== '') {
        calculate();
      }
  
      currentOperator = operator;
      currentInput += ` ${operator} `;
    }
  
    function calculate() {
      const parts = currentInput.split(' ');
      const num1 = parseFloat(parts[0]);
      const num2 = parseFloat(parts[2]);
  
      switch (currentOperator) {
        case '+':
          currentInput = (num1 + num2).toString();
          break;
        case '-':
          currentInput = (num1 - num2).toString();
          break;
        case '*':
          currentInput = (num1 * num2).toString();
          break;
        case '/':
          currentInput = (num1 / num2).toString();
          break;
        default:
          break;
      }
  
      currentOperator = '';
      shouldResetDisplay = true;
    }
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
  
    let currentInput = '';
    let currentOperator = '';
    let shouldResetDisplay = false;
  
    buttons.addEventListener('click', function (event) {
      handleButtonClick(event.target.textContent);
    });
  
    document.addEventListener('keydown', function (event) {
      const key = event.key;
  
      if (key.match(/[0-9+\-*/=.]/)) {
        handleButtonClick(key);
      } else if (key === 'Enter') {
        handleButtonClick('=');
      }
    });
  
    function handleButtonClick(buttonText) {
      if (buttonText.match(/[0-9]/)) {
        handleNumber(buttonText);
      } else if (buttonText.match(/[+\-*/]/)) {
        handleOperator(buttonText);
      } else if (buttonText === '=') {
        calculate();
      }
  
      updateDisplay();
    }
  
    function handleNumber(num) {
      if (shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
      } else {
        currentInput += num;
      }
    }
  
    function handleOperator(operator) {
      if (currentOperator !== '') {
        calculate();
      }
  
      currentOperator = operator;
      currentInput += ` ${operator} `;
    }
  
    function calculate() {
      const parts = currentInput.split(' ');
      const num1 = parseFloat(parts[0]);
      const num2 = parseFloat(parts[2]);
  
      if (!isNaN(num1) && !isNaN(num2)) {
        switch (currentOperator) {
          case '+':
            currentInput = (num1 + num2).toString();
            break;
          case '-':
            currentInput = (num1 - num2).toString();
            break;
          case '*':
            currentInput = (num1 * num2).toString();
            break;
          case '/':
            currentInput = (num1 / num2).toString();
            break;
          default:
            break;
        }
  
        currentOperator = '';
        shouldResetDisplay = true;
      }
    }
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  });
  