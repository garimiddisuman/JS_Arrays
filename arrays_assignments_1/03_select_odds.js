// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function selectOdds(numbers) {
  const oddElementsArray = [];

  for (let index = 0; index < numbers.length; index++) {
    if (!isDivisible(numbers[index], 2)) {
      oddElementsArray[oddElementsArray.length] = numbers[index];
    }
  }

  return oddElementsArray;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, expected, actual) {
  const arraySegment = "|array :[" + array;
  const message = "]\n   |Expected : [" + expected + "]\n   |actual :[";

  return arraySegment + message + actual + "]";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testSelectOdds(array, expected) {
  const actual = selectOdds(array);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testSelectOdds([1, 2, 3, 4], [1, 3]);
  testSelectOdds([3, 2, 4, 5, 7], [3, 5, 7]);
  testSelectOdds([2, 4, 6], []);
  testSelectOdds([], []);
}

testAll();