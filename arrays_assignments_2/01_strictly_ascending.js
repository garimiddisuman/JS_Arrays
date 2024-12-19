// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(array) {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] >= array[index + 1]) {
      return false;
    }
  }

  return true;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, expected, actual) {
  const arraySegment = "|array :[" + array;
  const message = "]\n   |Expected : " + expected + "\n   |actual : ";

  return arraySegment + message + actual;
}

function testStrictlyDescending(array, expected) {
  const actual = isStrictlyAscending(array);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(array, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testStrictlyDescending([1, 3, 4, 5, 16], true);
  testStrictlyDescending([12, 13, 4, 5, 16], false);
  testStrictlyDescending([1, 3, 2, 4], false);
  testStrictlyDescending([2, 4, 6], true);
  testStrictlyDescending([2, 2, 2], false);
  testStrictlyDescending([1, 3, 3, 4], false);
  testStrictlyDescending([2], true);
  testStrictlyDescending([], true);
}

testAll();