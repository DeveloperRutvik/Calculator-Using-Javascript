let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function clearSingleDigit() {
    display.value = display.value.toString().slice(0, -1);
}