// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

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

/*    ------------------- Testing Section --------------------------      */
function getMessage(array1, arrey2, expected, actual) {
  const arraySegment = "|array_1 :[" + array1 + "]\n   |array_2 :[" + arrey2;
  const message = "]\n   |Expected :" + expected + "\n   |actual :" + actual;

  return arraySegment + message;
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(array1, array2, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
  testAreEqual([], [], true);
}

testAll();