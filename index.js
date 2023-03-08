const currentTextOnTheCalculator = document.querySelector('#CurrentNumberOnTheCalculator');
function checkError () {
    if (currentTextOnTheCalculator.textContent == 'Error') {
        currentTextOnTheCalculator.textContent = '';
        currentTextOnTheCalculator.appendChild(document.createElement('br'));
    }
    return currentTextOnTheCalculator.textContent.length != 10;
}
function whenPressNumberZero () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '0';
    }
}
function whenPressNumberOne () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '1';
    }
}
function whenPressNumberTwo () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '2';
    }
}
function whenPressNumberThree () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '3';
    }
}
function whenPressNumberFour () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '4';
    }
}
function whenPressNumberFive () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '5';
    }
}
function whenPressNumberSix () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '6';
    }
}
function whenPressNumberSeven () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '7';
    }
}
function whenPressNumberEight () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '8';
    }
}
function whenPressNumberNine () {
    if (checkError()) {
        currentTextOnTheCalculator.textContent += '9';
    }
}
function whenPressDot () {
    checkError();
    currentTextOnTheCalculator.textContent += '.';
}
function whenPressEraseButton () {
    checkError();
    const current = currentTextOnTheCalculator.textContent;
    if (current.length > 0) {
        currentTextOnTheCalculator.textContent = current.substring(0, current.length - 1);
    }
    if (current.length == 1) {
        currentTextOnTheCalculator.appendChild(document.createElement('br'));
    }
}
function whenPressPlusButton () {
    checkError();
    currentTextOnTheCalculator.textContent += '+';
}
function whenPressMinusButton () {
    checkError();
    currentTextOnTheCalculator.textContent += '-';
}
function whenPressEqualButton () {
    let number = currentTextOnTheCalculator.textContent;
    if (number == 'Error') {
        return;
    }
    let ans = 0, yes = 0;
    for (let i = 0; i < number.length - 1; ++i) {
        if ((number[i] == '+' && number[i + 1] == '+') || (number[i] == '-' && number[i + 1] == '+') || (number[i] == '+' && number[i + 1] == '-') || (number[i] == '-' && number[i + 1] == '-')) {
            yes = 1;
        }
    }
    if (yes || number[0] == '+' || number[number.length - 1] == '+' || number[number.length - 1] == '-' || number[0] == '.' || number[number.length - 1] == '.') {
        currentTextOnTheCalculator.textContent = 'Error';
        return;
    }
    if (number[0] != '-') {
        number = '+' + number;
    }
    for (let i = 0; i < number.length;) {
        let j = i, theNumberToAdd = '';
        ++i;
        while (i < number.length && number[i] != '+' && number[i] != '-') {
            theNumberToAdd += number[i];
            ++i;
        }
        ans += Number(theNumberToAdd) * (number[j] == '+' ? 1 : -1);
    }
    currentTextOnTheCalculator.textContent = ans.toString();
}