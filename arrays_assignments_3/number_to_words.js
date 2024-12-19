// International Number System....

function getLessThan20Words(num) {
  const BELOW_TWENTY = ['', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return BELOW_TWENTY[num];
}

function getTensWords(number) {
  const TENS = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
    'eighty', 'ninety'];

  if (number < 20) {
    return getLessThan20Words(number);
  }

  const remainder = number % 10;
  const quotient = Math.floor(number / 10);

  return (TENS[quotient - 2] + ' ' + getLessThan20Words(remainder)).trim();
}

function getHundredsWords(number) {
  if (number < 100) {
    return getTensWords(number);
  }

  const remainder = number % 100;
  const quotient = Math.floor(number / 100);

  if (remainder === 0) {
    return getLessThan20Words(quotient) + ' hundred';
  }

  return getLessThan20Words(quotient) + ' hundred ' + getTensWords(remainder);
}

function getNumberToWords(placeValues) {
  const PLACE_WORDS = ['', ' thousand', ' million', ' billion'];
  const words = [];

  for (let index = 0; index < placeValues.length; index++) {
    const scales = PLACE_WORDS[placeValues.length - 1 - index];
    const groupDigits = placeValues[index];

    if (groupDigits > 0) {
      words.push(getHundredsWords(groupDigits) + scales);
    }
  }

  return words.join(" ");
}

function extractPlaceValues(number) {
  let remainingDigits = number;
  const placeValues = [];

  while (remainingDigits > 0) {
    placeValues.unshift(remainingDigits % 1000);
    remainingDigits = Math.floor(remainingDigits / 1000);
  }

  return placeValues;
}

function numberToWords(num) {
  if (num === 0) {
    return 'zero';
  }

  const placeValues = extractPlaceValues(num);
  return getNumberToWords(placeValues);
}

/*------------------------* TESTING SECTION *-----------------------------*/
function makeMessage(number, actual, expected) {
  const message = '|number : ' + number + '\n  |expected : ' + expected;

  return message + '\n  |actual : ' + actual;
}

function testNumbetToWords(number, expected) {
  const actual = numberToWords(number);
  const status = actual === expected ? "✅" : "❌";
  const content = status + makeMessage(number, actual, expected);

  console.log(content + '\n');
}

function belowHundred() {
  testNumbetToWords(0, 'zero');
  testNumbetToWords(5, 'five');
  testNumbetToWords(10, 'ten');
  testNumbetToWords(19, 'nineteen');
  testNumbetToWords(20, 'twenty');
  testNumbetToWords(35, 'thirty five');
  testNumbetToWords(99, 'ninety nine');
}

function belowThousand() {
  testNumbetToWords(100, 'one hundred');
  testNumbetToWords(200, 'two hundred');
  testNumbetToWords(101, 'one hundred one');
  testNumbetToWords(111, 'one hundred eleven');
  testNumbetToWords(110, 'one hundred ten');
  testNumbetToWords(202, 'two hundred two');
  testNumbetToWords(120, 'one hundred twenty');
  testNumbetToWords(999, 'nine hundred ninety nine');
  testNumbetToWords(191, 'one hundred ninety one');
}

function aboveThousand() {
  testNumbetToWords(1000, 'one thousand');
  testNumbetToWords(1001, 'one thousand one');
  testNumbetToWords(1010, 'one thousand ten');
  testNumbetToWords(1011, 'one thousand eleven');
  testNumbetToWords(1100, 'one thousand one hundred');
  testNumbetToWords(1101, 'one thousand one hundred one');
  testNumbetToWords(9000, 'nine thousand');
  testNumbetToWords(100001, 'one hundred thousand one');
  testNumbetToWords(100000001, 'one hundred million one');
  const segment = 'hundred thirty four thousand five hundred sixty seven';
  testNumbetToWords(18234567, 'eighteen million two ' + segment);
  const segment1 = 'hundred ninety nine thousand nine hundred ninety nine';
  testNumbetToWords(99999999, 'ninety nine million nine ' + segment1);
}

function testAll() {
  belowHundred();
  belowThousand();
  aboveThousand();
}

testAll();