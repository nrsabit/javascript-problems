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

const resultOfMostFrequentElement = findTheMostFrequentElement([4, 5, 2, 4, 7, 9, 4])
// console.log(resultOfMostFrequentElement)



