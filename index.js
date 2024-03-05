/// Level first ///

const sum = (num1, num2) => num1 + num2;
console.log("Level first task 1:", sum(432, 53));

/// -------------------------------///

const mulBy5 = (num) => {
  const asResult = num === 0 ? 0 : 5 * num;
  console.log(`Level first task 2: 5 * ${num} = ${asResult}`);
};
mulBy5(42);

/// -------------------------------///

const max = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};
console.log("Level first task 3:", max(389, 358));

/// Level second ///

const pow = (x, n) => {
  if (x === undefined && n === undefined) {
    return 9;
  }
  // if (n === 0) {
  //   return 1;
  // } else {
  //   return x * pow(x, n - 1);
  // }
  return n === 0 ? 1 : x * pow(x, n - 1);
};
console.log("Level second - default value:", pow());
console.log("Level second:", pow(2, 4));

/// Level third ///

const sumOrConcatenation = (value1, value2) => {
  if (value1 === undefined && value2 === undefined) {
    return 30;
  }
  if (typeof value1 === "string" || typeof value2 === "string") {
    // return "Result of concatenation " + value1 + " " + value2;
    console.log("Result of concatenation: " + value1 + " " + value2);
  } else if (typeof value1 === "number" && typeof value2 === "number") {
    // return value1 + value2;
    console.log("Level third - sum:", value1 + value2);
  } else {
    // return "Incorrect arguments!";

    console.log("Incorrect arguments!");
  }
};
console.log("Level third - default value:", sumOrConcatenation());
sumOrConcatenation("23212", 53214);
sumOrConcatenation(321, 532);

// console.log("Level third - default value:", sumOrConcatenation());
// console.log("Level third - concatenation:", sumOrConcatenation("23", 534));
// console.log("Level third - sum:", sumOrConcatenation(3, 5));

/// Level fourth ///

// const fib1 = (n) => {
//   if (n < 2) {
//     return n;
//   } else {
//     return fib1(n - 1) + fib1(n - 2);
//   }
// };
// console.log("Level fourth - first method:", fib1(8));

/// -------------------------------///

const fib = (n) => {
  let firstValueOfFibonacci = 1;
  let secondValueOfFibonacci = 1;
  for (let i = 3; i <= n; i++) {
    const sumOfFibValues = firstValueOfFibonacci + secondValueOfFibonacci;
    firstValueOfFibonacci = secondValueOfFibonacci;
    secondValueOfFibonacci = sumOfFibValues;
  }
  return secondValueOfFibonacci;
};
console.log("Level fourth - second method:", fib(3));
console.log("Level fourth - second method:", fib(7));
console.log("Level fourth - second method:", fib(9));
