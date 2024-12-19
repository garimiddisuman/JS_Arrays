// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

function fibonacci(nth) {
  const reference = [0, 1]
  const fibonacciList = [];

  for (let index = 0; index < nth; index++) {
    fibonacciList[index] = reference[index];
    reference[index + 2] = reference[index] + reference[index + 1];
  }

  return fibonacciList;
}

/*    ------------- Testing Section --------------------      */
function getMessage(nth, expected, actual) {
  const nthSegment = "|nth :" + nth;
  const message = "\n   |Expected :[" + expected + "]\n   |actual :[";

  return nthSegment + message + actual + "]";
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

function testFibonacci(nth, expected) {
  const actual = fibonacci(nth);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(nth, expected, actual);

  console.log(status, content, "\n");
}

function testCases() {
  testFibonacci(0, []);
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(4, [0, 1, 1, 2]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
}

testCases();