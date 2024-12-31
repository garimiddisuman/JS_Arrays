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

function testStrictlyAscending(array, expected) {
  const actual = isStrictlyAscending(array);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(array, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testStrictlyAscending([1, 3, 4, 5, 16], true);
  testStrictlyAscending([12, 13, 4, 5, 16], false);
  testStrictlyAscending([1, 3, 2, 4], false);
  testStrictlyAscending([2, 4, 6], true);
  testStrictlyAscending([2, 2, 2], false);
  testStrictlyAscending([1, 3, 3, 4], false);
  testStrictlyAscending([2], true);
  testStrictlyAscending([], true);
}

testAll();
