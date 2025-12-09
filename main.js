// ---------------------------------------------------------
// Part 1: Fizz Buzz
// ---------------------------------------------------------

for (let i = 1; i <= 100; i++) 
{console.log(i);
}
// Prints the numbers 1 to 100

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

// ---------------------------------------------------------
// Part 2: Prime Time
// ---------------------------------------------------------

// starting number
let n = 4;

// candidate is the number just above n
let candidate = n + 1;

while (true) {
    let isPrime = true;
  
    // try dividing candidate by all numbers from 2 to candidate - 1
    for (let divisor = 2; divisor < candidate; divisor++) {
      if (candidate % divisor === 0) {
        isPrime = false;
        break; // 
      }
    }
  
    if (isPrime) {
      console.log("Next prime after", n, "is", candidate);
      break; // 
    }
  
    // not prime, try the next number
    candidate++;
  }
// Prints Next prime after 4 is 5
