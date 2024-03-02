/// Level first ///

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log("Level first task 1:", sum(432, 53));

/// -------------------------------///

const mulBy5 = (num) => {
  const asResult = 5 * num;
  console.log(`Level first task 2: 5 * ${num} = ${asResult}`);
};
mulBy5(4);

/// -------------------------------///

const max = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log("Level first task 3:", max(34, 35));

/// Level second ///

let powValue = 1;
const pow = (x, n) => {
  if (x === undefined && n === undefined) {
    return 9;
  }
  for (let i = 0; i < n; i++) {
    powValue *= x;
  }
  return powValue;
};
console.log("Level second - default value:", pow());
console.log("Level second:", pow(2, 4));

/// Level third ///

const sumOrConcatenation = (value1, value2) => {
  if (value1 === undefined && value2 === undefined) {
    return 30;
  }
  if (typeof value1 === "string" || typeof value2 === "string") {
    return "Result of concatenation " + value1 + " " + value2;
  } else if (typeof value1 === "number" && typeof value2 === "number") {
    return value1 + value2;
  } else {
    return "Incorrect arguments!";
  }
};

console.log("Level third - default value:", sumOrConcatenation());
console.log("Level third - concatenation:", sumOrConcatenation("23", 534));
console.log("Level third - sum:", sumOrConcatenation(3, 5));

/// Level fourth ///

const fib1 = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fib1(n - 1) + fib1(n - 2);
  }
};
console.log("Level fourth - first method:", fib1(8));

/// -------------------------------///

let firstValueOfFibonacci = 1;
let secondValueOfFibonacci = 1;

const fib = (n) => {
  for (let i = 3; i <= n; i++) {
    const sumOfFibValues = firstValueOfFibonacci + secondValueOfFibonacci;
    firstValueOfFibonacci = secondValueOfFibonacci;
    secondValueOfFibonacci = sumOfFibValues;
  }
  return secondValueOfFibonacci;
};
console.log("Level fourth - second method:", fib(9));
