/*FizzBuzz:
Write a program that prints the numbers from 1 to n. 
But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
For numbers that are multiples of both three and five, print "FizzBuzz".*/
function FizzBuzz() {
  let number = document.getElementById("list-number").value;
  let result = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz ";
    } else if (i % 3 === 0) {
      result += "Fizz ";
    } else if (i % 5 === 0) {
      result += "Buzz ";
    } else {
      result += i + " ";
    }
  }
  document.getElementById("demo1").innerHTML = result;
  document.getElementById("cat-text").innerHTML = "<p>Multiples of three are printed 'Fizz', multiples of five are printed 'Buzz', and multiples of both are 'Fizz Buzz'.</p>";
}