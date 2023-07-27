// 1- Reversing a string without using reverse() method
function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

const resultOfReverseString = reverseString("Hello World");
// console.log(resultOfReverseString)

// 2- Function for only finding the sum of the positive values from an array.
function sumOfPositiveNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

const resultOfPositiveNumbers = sumOfPositiveNumbers([5, -0, 3, -9, 10]);
// console.log(resultOfPositiveNumbers)

// 3- function for finding the most frequent item in an array.
function findTheMostFrequentElement(arr) {
  // checking if the parameter is array or not, also checking if it has items or not
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  var frequencyMap = {};
  var maxFrequency = 0;
  var mostFrequentElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }

    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const resultOfMostFrequentElement = findTheMostFrequentElement([
  4, 5, 2, 4, 7, 9, 4,
]);
// console.log(resultOfMostFrequentElement)

// 4- function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indexes of the two numbers.
function findTwoIndexesWithSumOfTarget(sortedArray, target) {
  let leftIndex = 0;
  let rightIndex = leftIndex + 1;

  while (leftIndex < rightIndex) {
    const sum = sortedArray[leftIndex] + sortedArray[rightIndex];

    if (sum === target) {
      return [leftIndex, rightIndex];
    } else if (sum < target) {
      leftIndex++;
      rightIndex++;
    }
  }

  return null; // if 2 values not found that are the same as the target after sum then return null
}

const resultOfTwoIndexesOfTarget = findTwoIndexesWithSumOfTarget(
  [2, 5, 4, 8, 9, 11],
  12
);
// console.log(resultOfTwoIndexesOfTarget);

// 5- create a function for a basic calculatior with only +, -, *, / operators
function basicCalculator(num1, num2, operator) {
  if ((num1, num2, operator)) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0 || num1 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  } else {
    return "Please take 2 numbers and a valid operator. ";
  }
}

const resultOfBasicCalculator = basicCalculator(7, 5, "-");
// console.log(resultOfBasicCalculator)

// 6- Function that generates a random password of a specific length provided by parameter. The password includes a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(passwordLength) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

const password = generateRandomPassword(32);
// console.log(password);




