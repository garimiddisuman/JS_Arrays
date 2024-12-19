// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

function isStrictlyDescending(array) {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] <= array[index + 1]) {
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
  const actual = isStrictlyDescending(array);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(array, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testStrictlyDescending([1, 3, 4, 5, 16], false);
  testStrictlyDescending([5, 4, 2, 1], true);
  testStrictlyDescending([12, 13, 4, 5, 16], false);
  testStrictlyDescending([1, 3, 2, 4], false);
  testStrictlyDescending([5, 4, 4, 1], false);
  testStrictlyDescending([6, 4, 2, 1], true);
  testStrictlyDescending([], true);
}

testAll();