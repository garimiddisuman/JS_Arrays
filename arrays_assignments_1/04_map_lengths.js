// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function mapLengths(words) {
  const mapLengthsList = [];

  for (let index = 0; index < words.length; index++) {
    mapLengthsList[mapLengthsList.length] = words[index].length;
  }

  return mapLengthsList;
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

function testMapLengths(array, expected) {
  const actual = mapLengths(array);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testMapLengths(["suman", "ajay", "jai"], [5, 4, 3]);
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths(["one", "three", "seven"], [3, 5, 5]);
  testMapLengths(["", "a", ""], [0, 1, 0]);
  testMapLengths([], []);
}

testAll();