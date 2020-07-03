// Write a JavaScript program that generates a Fibonacci sequence of N numbers where the user specifies N using a prompt.

// Use the prompt statement to ask the user how many numbers they want in the sequence.

// Test that the value is greater than or equal to 3. If it is not, then output an error message.

// Write the sequence of numbers into an array.

// Use a for loop to read the numbers out of the array and write then to the page.

var sequence = [];
sequence[0] = 0;
sequence[1] = 1;
amount = window.prompt("How many numbers in the sequence?");

if (amount >= 3 || !isNaN(amount)) {
  for (i = 2; i <= amount; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
    ratio = sequence[i - 1] / sequence[i - 2];
    console.log(sequence[i]);
    document.writeln(sequence[i] + "<br /> <br />");
  }
  console.log(ratio);
} else {
  amount = window.prompt("Enter a number 3 or greater.");
  for (i = 2; i <= amount; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
    console.log(sequence[i]);
    document.writeln(sequence[i]);
  }
  console.log(ratio);
}
