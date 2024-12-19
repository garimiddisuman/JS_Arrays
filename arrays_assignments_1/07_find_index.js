// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(array, element, expected, actual) {
  const arraySegment = "|array :[" + array + "]\n   |element :" + element;
  const message = "\n   |Expected : " + expected + "\n   |actual :";

  return arraySegment + message + actual;
}

function testFindIndex(array, element, expected) {
  const actual = findIndex(array, element);
  const status = expected === actual ? "✅" : "❌";
  const content = getMessage(array, element, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testFindIndex([6, 2, 3, 1, 4, 7], 3, 2);
  testFindIndex([6, 2, 3, 1, 4, 7], 8, -1);
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
}

testAll();