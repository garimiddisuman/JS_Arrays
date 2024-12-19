// Return true if all elements are present in the array regardless of
// their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementPresent(set, element) {
  for (let index = 0; index < set.length; index++) {
    if (set[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isElementPresent(array, elements[index])) {
      return false;
    }
  }

  return true;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, elements, expected, actual) {
  const arraySegment = "|array : [" + array;
  const elementsSegment = "]\n   |Elements : [" + elements;
  const message = "]\n   |Expected : " + expected + "\n   |actual : ";

  return arraySegment + elementsSegment + message + actual;
}

function testContainAll(array, elements, expected) {
  const actual = containsAll(array, elements);
  const status = actual === expected ? "✅" : "❌";
  const content = getMessage(array, elements, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testContainAll([1, 2, 3], [2, 1], true);
  testContainAll([1, 2, 3], [2, 1, 4], false);
  testContainAll([], [], true);
}

testAll();