// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function reverseFibonacci(nth) {
  const reference = [0, 1];
  const ReverseFibonacciList = [];

  for (let termPosition = nth - 1; termPosition >= 0; termPosition--) {
    const index = reference.length;
    ReverseFibonacciList[termPosition] = reference[index - 2];
    reference[index] = reference[index - 2] + reference[index - 1];
  }

  return ReverseFibonacciList;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(nth, expected, actual) {
  const nthSegment = "|nth : " + nth;
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
  const actual = reverseFibonacci(nth);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(nth, expected, actual);

  console.log(status, content, "\n");
}

function testCases() {
  testFibonacci(0, []);
  testFibonacci(1, [0]);
  testFibonacci(2, [1, 0]);
  testFibonacci(3, [1, 1, 0]);
  testFibonacci(4, [2, 1, 1, 0]);
  testFibonacci(5, [3, 2, 1, 1, 0]);
}

testCases();