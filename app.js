console.log("Exercise 1: Print Odds Continued\n");
function printOdds(count = 10) {
  for (let i = 1; i < count; i++) {
    if (i % 2 === 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}

printOdds(20);
printOdds();

console.log("Exercise 1 Bonus: Print Odds Continued\n");

function printOddsBonus(count = 10) {
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

printOddsBonus(-20);

console.log("Exercise 2: Legal?\n");
function checkAge(name, age) {
  let oldEnoughMsg = `Congrats ${name}, you can drive!`;
  let tooYoungMsg = `Sorry ${name}, but you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(oldEnoughMsg);
  } else {
    console.log(tooYoungMsg);
  }
}

checkAge("Ben", 15);
checkAge("Seth", 16);
checkAge("Tyson", 19);

console.log("Exercise 3: Which Quadrant?\n");

function whichQuadrant(x = 0, y = 0) {
  if (x === 0 && y === 0) {
    console.log("This point is at the origin.");
  } else if (x === 0) {
    console.log(`This point is on the y-axis.`);
  } else if (y === 0) {
    console.log(`This point is on the x-axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`This point is in Quadrant 1.`);
  } else if (x < 0 && y > 0) {
    console.log(`This point is in Quadrant 2.`);
  } else if (x < 0 && y < 0) {
    console.log(`This point is in Quadrant 3.`);
  } else {
    console.log(`This point is in Quadrant 4.`);
  }
}

whichQuadrant(0, 0);
whichQuadrant(0, 1);
whichQuadrant(1, 0);
whichQuadrant(1, 1);
whichQuadrant(-1, 1);
whichQuadrant(-1, -1);
whichQuadrant(1, -1);

console.log("Exercise 4: What type of triangle?\n");

function triangleType(side1 = 0, side2 = 0, side3 = 0) {
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    console.log("This is an invalid triangle.");
  } else if (side1 === side2 && side1 === side3) {
    console.log("This is an equilateral triangle.");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("This is an isosceles triangle.");
  } else {
    console.log("This is a scalene triangle.");
  }
}

triangleType(1, 1, 2); // invalid
triangleType(1, 1, 1); // equilateral
triangleType(1, 2, 2); // isosceles
triangleType(2, 3, 4); // scalene

console.log("BONUS Exercise 5: Data Plan Status\n");

function dataPlanStatus(planLimit = 100, day = 15, usage = 56) {
  let daysRemaining = 30 - day;
  let averageDailyUse = (usage / day).toFixed(2);
  let averageDailyUseRemaining = ((planLimit - usage) / daysRemaining).toFixed(
    2
  );
  let excessUsage = (usage - planLimit).toFixed(2);
  let excessDailyUse = (averageDailyUse - averageDailyUseRemaining).toFixed(2);

  console.log(
    `${day} days used, ${daysRemaining} days remaining\nAverage daily use: ${averageDailyUse} GB/day`
  );

  if (usage > planLimit) {
    console.log(
      `You are EXCEEDING your average daily use (${averageDailyUse} GB/day). Continuing this high usage, you'll exceed your data plan by ${excessUsage} GB.\nTo stay below your data plan, use no more than ${averageDailyUseRemaining} GB/day.`
    );
  } else if (usage < planLimit) {
    console.log(
      `You are under your average daily use (${averageDailyUse} GB/day). You can afford to use ${averageDailyUseRemaining} GB/day for the rest of the month.`
    );
  } else {
    console.log(
      `You are right on your average daily use (${averageDailyUse} GB/day). You can afford to use ${averageDailyUseRemaining} GB/day for the rest of the month.`
    );
  }
}

dataPlanStatus(100, 15, 56); // under usage
dataPlanStatus(100, 15, 100); // right on usage
dataPlanStatus(100, 15, 101); // over usage
