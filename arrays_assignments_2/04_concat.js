// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function concat(array1, array2) {
  const combinedArray = [array1, array2];
  const concatenatedArray = [];

  for (let i = 0; i < combinedArray.length; i++) {
    const arrayToConcat = combinedArray[i];

    for (let j = 0; j < arrayToConcat.length; j++) {
      concatenatedArray.push(combinedArray[j]);
    }
  }

  return concatenatedArray;
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

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(array1, array2, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testConcat([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]);
  testConcat([10, 2, 3], [4, 5, 6], [10, 2, 3, 4, 5, 6]);
  testConcat([], [], []);
}

testAll();