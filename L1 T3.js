let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}
