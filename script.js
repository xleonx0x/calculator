function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) {
        alert("You can't do that!");
        clearResult();
        return;
    }
    return Math.round((a/b) * 100) / 100;
}

let firstNum = 0;
let operator = "";
let secondNum = 0;
let first = true;

const result = document.querySelector("#result");
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");

function operate(firstNumber, operation, secondNumber) {
    if (secondNum == "") {
        return;
    }
    first = true;
    switch (operation) {
        case "+":
            result.textContent = add(firstNumber, secondNumber);
            firstNum = result.textContent;
            secondNum = "";
            operator = "";
            break;
        case "-":
            result.textContent = subtract(firstNumber, secondNumber);
            firstNum = result.textContent;     
            secondNum = "";
            operator = "";
            break;
        case "x":
            result.textContent = multiply(firstNumber, secondNumber);
            firstNum = result.textContent;     
            secondNum = "";
            operator = "";
            break;
        case "/":
            result.textContent = divide(firstNumber, secondNumber);
            firstNum = result.textContent;
            if (secondNumber == 0) {
                firstNum = 0;
            }
            secondNum = "";
            operator = "";
            break;
        default:
            break;
    }
}


function display(value) {
    result.textContent += value;
    if (first) {
        firstNum += value;
    } else {
        secondNum += value;
    }
}

function displayOperator(value) {
    if (result.textContent.slice(-1).match(/[-/x*+]/)) {
        result.textContent = result.textContent.slice(0, -1);
    } else if (result.textContent.match(/[-/x*+]/)) {
        operate(parseFloat(firstNum), operator, parseFloat(secondNum));
    }
    result.textContent += value;
    operator = value;
    first = false;
}

function displayDot() {
    if (result.textContent.slice(-1).match(/[-/x*+.]/)) {
        result.textContent = result.textContent.slice(0, -1);
    }
    result.textContent += ".";
    if (first) {
        firstNum += ".";
    } else {
        secondNum += ".";
    }
}

function clearResult() {
    result.textContent = "";
    operator = "";
    secondNum = 0;
    firstNum = 0;
}

dot.addEventListener("click", () => {
    displayDot();
});

clear.addEventListener("click", () => {
    clearResult();
});

equal.addEventListener("click", () => {
    operate(parseFloat(firstNum), operator, parseFloat(secondNum));
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display(number.textContent);
    });
})


operators.forEach(operator => {
    operator.addEventListener("click", () => {
        displayOperator(operator.textContent);
    });
})

