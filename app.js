console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count = 10) {
  for (var i = 1; i < count; i++) {
    if (i % 2 === 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}

printOdds(10);

console.log("BONUS EXERCISE :\n==========\n");

function printOdds(count = 10) {
  if (count < 0) {
    count = -1 * count;
  }
  for (var i = 1; i < count; i++) {
    if (i % 2 === 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}

printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = 16, userName = "Mike") {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge(15, "Sally");
// checkAge(19, 'Sally')

// More Practice
console.log("More Practice:\n==========\n");
// Assign a function to a variable
let odds = function (count = 12) {
  for (var i = 1; i < count; i++) {
    if (i % 2 === 1) {
      console.log(i);
    } else {
      continue;
    }
  }
};

odds(10);
