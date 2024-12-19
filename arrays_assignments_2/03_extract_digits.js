// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]

function extractDigits(number) {
  const digits = [];
  let remainingDigits = Math.abs(number);

  while (remainingDigits > 9) {
    digits.unshift(remainingDigits % 10);
    remainingDigits = Math.floor(remainingDigits / 10);
  }

  digits.unshift(remainingDigits);
  return digits;
}

/*    ------------------- Testing Section --------------------------      */
function getMessage(number, expected, actual) {
  const arraySegment = "|number : " + number;
  const message = "\n   |Expected : [" + expected + "]\n   |actual : [";

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

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);
  const status = areEqual(actual, expected) ? "✅" : "❌";
  const content = getMessage(number, expected, actual);

  console.log(status, content, "\n");
}

function testAll() {
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(-123, [1, 2, 3]);
  testExtractDigits(-120, [1, 2, 0]);
  testExtractDigits(198, [1, 9, 8]);
  testExtractDigits(0, [0]);
}

testAll();