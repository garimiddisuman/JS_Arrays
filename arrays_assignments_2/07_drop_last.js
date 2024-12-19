// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

function dropLast(array, noOfElements) {
  const dropLastArray = [];

  for (let index = 0; index < array.length - noOfElements; index++) {
    dropLastArray.push(array[index]);
  }

  return dropLastArray;
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

function testDropLast(array, noOfElements, expected) {
  const actual = dropLast(array, noOfElements);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, noOfElements, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testDropLast([1, 3, 4, 5, 16], 1, [1, 3, 4, 5]);
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 3, 4, 5, 16], 2, [1, 3, 4]);
  testDropLast([1, 3], 3, []);
  testDropLast([], 1, []);
}

testAll();