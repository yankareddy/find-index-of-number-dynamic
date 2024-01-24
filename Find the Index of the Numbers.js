let numbers = [17, 31, 77, 20, 63];


const userInputElement = document.getElementById("userInput");
const findButton = document.getElementById("findBtn");
let indexOfNumberElement = document.getElementById("indexOfNumber");

findButton.onclick = function() {
    let number = parseInt(userInputElement.value);
    let numberIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === number) {
            return true;
        } else {
            return false;
        }

    });
    indexOfNumberElement.textContent = numberIndex;
}