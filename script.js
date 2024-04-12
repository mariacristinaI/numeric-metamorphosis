//Hello
let greeting = "Hello world! This is a collection of solved algorithms using only JavaScript. I used it as an exercise book. Have a great day. My cat sends her regards. 🐈‍⬛🎧✮";
console.log(greeting);

// Count the exercises and update the HTML
function countExercises() {
  const exercises = document.querySelectorAll('#terminal button').length + document.querySelectorAll('#terminal1 button').length;
  document.getElementById("exercises-number").innerHTML = exercises + 5;
}
countExercises();

// Opens different tabs
function openTerminal(displayId) {
  document.getElementById("terminal1").style.display = "none";
  document.getElementById("terminal").style.display = "none";
  document.getElementById(displayId).style.display = "block";
}

// Checks if the value of the element with id "demo" is even or odd, and updates the innerHTML of an element with id "parity" accordingly.
function updateParity(inputValue) {
  if (inputValue % 2 === 0) {
    document.getElementById("parity").innerHTML = "EVEN";
  } else {
    document.getElementById("parity").innerHTML = "ODD";
  }
  if (inputValue === undefined) {
    document.getElementById("parity").innerHTML = "";
  }
};

// Take a number as input, extract the last two digits, and switches their positions before returning the modified number.
function switchLastDigits() {
  let number = document.getElementById("number").value;
  const a = number % 10;
  number = Math.floor(number / 10);
  const b = number % 10;
  number = Math.floor(number / 10);
  number = number * 100 + a * 10 + b;

  document.getElementById("demo").innerHTML = number;
  updateParity(number);
  document.getElementById("cat-text").innerHTML = "<p>Displayed the number formed by interchanging the last two digits, the digit of tens and that of units.</p>";
};


//Take a number as input and reverse its digits.
function reverseNumbers() {
  let number = document.getElementById("number").value;
  if (!number) {
    return;
  };

  let c = [];
  while (number) {
    c.push(number % 10)
    number = Math.floor(number / 10)
  }
  // for(let i = 0; i<c.length; i++) {
  //   number = number * 10 + c[i];
  // };
  //  =
  //   let i = 0;
  //   while(i < c.length) {
  //     number = number * 10 + c[i];
  //     i++;
  //   }
  // =
  c.forEach(v => {
    number = number * 10 + v;
  });

  document.getElementById("demo").innerHTML = number;
  updateParity(number);
  document.getElementById("cat-text").innerHTML = "<p>Reversed a given number from the last digit to the first.</p>";
};

// Calculate and display the Fibonacci sequence up to a given number.
function fibonacci() {
  let inputNumber = document.getElementById("number").value;
  let sequence = [];
  let x = 0, y = 1;

  if(inputNumber) {
    sequence.push(x);
    for(let i = 1; i < inputNumber; i++){
      sequence.push(y);
      let sum = y;
      y = x + y;
      x = sum;
    }
  };

  document.getElementById("demo").innerHTML = sequence;
  updateParity();
  document.getElementById("cat-text").innerHTML = "<p>Calculated and displayed the Fibonacci sequence up to the given number.</p>";
};

function dayOfProgrammer(year) {
let date = new Date(year,0,1);
if(year!=1918){
  date.setDate(256);
}else {
  date.setDate(224);
}
return date;
};
console.log(dayOfProgrammer(1800));


function pyramid() {
  let inputNumber = document.getElementById('number').value;
  let result = '';
  for (let i = 1; i <= inputNumber; i++) {
    let row = '';
    for (let j = 1; j <= inputNumber - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i; k++) {
      row += k;
    }
    result += row + '<br>';
  }
  document.getElementById("demo").innerHTML = result;
  document.getElementById("cat-text").innerHTML = "<p>Displayed a pyramid pattern constructed of ascending numbers.</p>";
  updateParity();
};
function pyramidReverse() {
  let inputNumber = document.getElementById('number').value;
  let result = '';
  for (let i = inputNumber; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= inputNumber - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i; k++) {
      row += k;
    }
    result += row + '<br>';
  }
  document.getElementById("demo").innerHTML = result;
  document.getElementById("cat-text").innerHTML = "<p>Constructed a pyramid pattern comprised of numbers in descending order.</p>";
  updateParity();
};

function rectangle() {
  let inputNumber = document.getElementById('number').value;
  let result = '';
  for (let i = 0; i < inputNumber; i++) {
    for (let j = 0; j < inputNumber; j++) {
      result += '*';
    }
    result += '<br>';
  }
  document.getElementById("demo").innerHTML = result;
  document.getElementById("cat-text").innerHTML = "<p>Print the specified number of asterisks to form a rectangle pattern.</p>";
  updateParity();
};