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


// ---------------------------------------------------------
// ---------------------------------------------------------
// Part 3: Feeling Loopy (CSV Parsing)
// ---------------------------------------------------------

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0;

for (let i = 0; i < str.length; i++) {
  let current = str[i];

  if (current === ",") {
    commas++;
  } else if (current === "\n") {
    console.log(cell1, cell2, cell3, cell4);
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    if (commas === 0) {
      cell1 += current;
    } else if (commas === 1) {
      cell2 += current;
    } else if (commas === 2) {
      cell3 += current;
    } else {
      cell4 += current;
    }
  }

  if (i === str.length - 1) {
    console.log(cell1, cell2, cell3, cell4);
  }
}