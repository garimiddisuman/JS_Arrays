// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filterAboveArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filterAboveArray[filterAboveArray.length] = array[index];
    }
  }

  return filterAboveArray;
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
  const actual = filterAbove(array, threshold);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, threshold, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove([6, 2, 3, 1, 4, 7], 8, []);
  testFilterAbove([], 8, []);

}

testAll();