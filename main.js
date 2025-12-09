// ======================
// Part 1: Fizz Buzz
// ======================

// for (let i = 1; i <= 100; i++) 
// {console.log(i);
// }
// // Prints the numbers 1 to 100

// Fizz Buzz Game
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz"); // Prints Fizz if the number is divisible by 3
    } else if (i % 5 === 0) {
      console.log("Buzz"); // Prints Buzz if the number is divisible by 5
    } else {
      console.log(i); // Prints the number if it is not divisible by 3 or 5
    }
  }
  // Prints the numbers 1 to 100 with Fizz Buzz logic

  // ======================