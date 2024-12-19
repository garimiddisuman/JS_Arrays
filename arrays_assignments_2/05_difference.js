// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const disJointSet = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isElementPresent(array2, array1[index])) {
      disJointSet.push(array1[index]);
    }
  }

  return disJointSet;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array1, array2, expected, actual) {
  const arraySegment = "|array1 : [" + array1 + "]\n   |array2 : [" + array2;
  const message = "]\n   |Expected : [" + expected + "]\n   |actual : [";

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

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array1, array2, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testDifference([1, 2, 3], [2, 3, 4], [1]);
  testDifference([1, 2, 3], [4, 5, 6], [1, 2, 3]);
  testDifference([], [], []);
}

testAll();