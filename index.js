let number = document.getElementById("count");
let valu = 0;
function plaseValue() {
  valu += 1;
  number.innerText = valu;
}

function minasValue() {
  valu -= 1;
  number.innerText = valu;
}

let welcomeEl = document.getElementById("welcomeel");
let name = "Monirul";
let greating = "you are welcome in codeing world";

welcomeEl.innerText = name + " " + greating;

let saveNumber = document.getElementById("changed");
function save() {
  let counting = " " + valu + " - ";
  saveNumber.innerText += counting;
}

// error message
let message = document.getElementById("error");
function purchesNow() {
  message.innerText = "Something went worng, Please try again";
}

// simpale calculator
let input1 = document.getElementById("firstInput");
let input2 = document.getElementById("secondInput");
let num1 = parseFloat(input1.textContent);
let num2 = parseFloat(input2.textContent);
let outcome = document.getElementById("result");

if (num1 < num2) {
  function add() {
    outcome.textContent = num1 + num2;
  }
}
//  else if (num1 < num2) {
//   function subtract() {
//     outcome.textContent = num1 - num2;
//   }
// } else if (num1 === num2) {
//   function divide() {
//     outcome.textContent = num1 / num2;
//   }
// }
else {
  function multiply() {
    outcome.textContent = num1 * num2;
  }
}
