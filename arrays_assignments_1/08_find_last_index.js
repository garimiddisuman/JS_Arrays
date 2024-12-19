// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
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
  const actual = findLastIndex(array, element);
  const status = expected === actual ? "✅" : "❌";
  const content = getMessage(array, element, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testFindIndex([6, 2, 3, 1, 4, 7, 3], 3, 6);
  testFindIndex([6, 2, 3, 1, 4, 7], 8, -1);
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 4);
  testFindIndex(["apple", "cake", "tea", "coffee"], "tea", 2);
  testFindIndex([], "tea", -1);
  testFindIndex([], 5, -1);
}

testAll();