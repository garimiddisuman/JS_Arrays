// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray[reversedArray.length] = array[index];
  }

  return reversedArray;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, expected, actual) {
  const arraySegment = "|array :[" + array;
  const message = "]\n   |Expected : [" + expected + "]\n   |actual :[";

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

function testReverse(array, expected) {
  const actual = reverse(array);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
  testReverse([1, 2, 3], [3, 2, 1]);
  testReverse(["a", "b", "c"], ["c", "b", "a"]);
  testReverse([], []);
}

testAll();