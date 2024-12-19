// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters

function filterBelow(array, threshold) {
  const filterBelowArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filterBelowArray[filterBelowArray.length] = array[index];
    }
  }

  return filterBelowArray;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, threshold, expected, actual) {
  const arraySegment = "|array :[" + array + "]\n   |threshold :" + threshold;
  const message = "\n   |Expected : [" + expected + "]\n   |actual :[";

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

function testFilterAbove(array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, threshold, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterAbove([6, 2, 3, 1, 4, 7], 8, [6, 2, 3, 1, 4, 7]);
  testFilterAbove([6, 2, 3, 1, 4, 7], 0, []);
  testFilterAbove([], 8, []);

}

testAll();