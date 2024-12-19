// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array

function drop(array, noOfElements) {
  const dropArray = [];

  for (let index = noOfElements; index < array.length; index++) {
    dropArray.push(array[index]);
  }

  return dropArray;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, noOfElements, expected, actual) {
  const arraySegment = "|array : [" + array;
  const numberSegment = "]\n   |noOfElements : " + noOfElements;
  const message = "\n   |Expected : [" + expected + "]\n   |actual : [";

  return arraySegment + numberSegment + message + actual + "]";
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

function testDrop(array, noOfElements, expected) {
  const actual = drop(array, noOfElements);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, noOfElements, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testDrop([1, 3, 4, 5, 16], 1, [3, 4, 5, 16]);
  testDrop([1, 3, 4, 5, 16], 2, [4, 5, 16]);
  testDrop([1, 3], 3, []);
  testDrop([], 1, []);
}

testAll();