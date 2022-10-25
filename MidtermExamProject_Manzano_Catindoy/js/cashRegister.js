//Select all the required elements
const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const invalidInput = document.querySelector(".invalid-input");
const noteTds = document.querySelectorAll("#note-values td");
const billForm = document.querySelector("#bill-form");

//Event listeners
billAmount.addEventListener("focusout", displayCashAmount);
billForm.addEventListener("submit", handleFormSubmission);



//Functions
function displayCashAmount() {
  cashAmount.parentElement.classList.add("active");
}

function handleFormSubmission(event) {
  event.preventDefault();
  validateCashAndFillTable(billAmount.value, cashAmount.value);
}

function validateCashAndFillTable(amount, cash) {
  const { message, result } = validateAmounts(amount, cash);
  if (!result) {
    printError(message);
    return;
  }
  const change = cash - amount;
  const notes = [2000, 500, 100, 20, 10, 5, 1];
  if (change > 0) fillTableWithNotes(notes, change);
}

function fillTableWithNotes(notes, change) {
  for (let index = 0; index < notes.length; index++) {
    const notesNumber = parseInt(change / notes[index]);
    change = change % notes[index];
    noteTds[index].innerText = notesNumber;
    if (change === 0) return;
  }
}

function printError(message) {
  invalidInput.innerText = message;
  invalidInput.classList.add("active");
}

function validateAmounts(amount, cash) {
  if (!isNaN(amount) && !isNaN(cash)) {
    if (amount > cash) {
      return {
        message: "Do you want to wash the plates?",
        result: false,
      };
    }
    return {
      message: "",
      result: true,
    };
  }
  return {
    message: "Invalid input amount. Please make sure you type a number",
    result: false,
  };
}


//DOM Document Object Model manipulation
document.body.style.backgroundImage = "url('https://i.stack.imgur.com/jGlzr.png')";
let h1 = document.querySelector('h1').style.color = 'aqua';
let h1Shadow = document.querySelector('h1').style.textShadow = "3px 3px 3px black";
let h1Shadow1 = document.querySelector('h1').style.textShadow = "5px 5px 5px black";

let billInput = document.getElementById('bill-amount').style.color = "aqua";
const invalid = document.getElementsByClassName('invalid-input');
for (let j=0; j<invalid.length; j++) {
  invalid[j].style.backgroundColor = "indianred";
  invalid[j].style.color = "red";
}
var notes = document.getElementById('note-values').style.color = "aqua";
let info1 = document.getElementById('copyright').style.color = "#FF0000";
let info2 = document.getElementById('copyright').style.backgroundColor = "#F11A1A";
let info3 = document.getElementById('copyright').style.textShadow = "3px 3px 3px black";