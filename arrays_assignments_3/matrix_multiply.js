function areColumsEqual(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[0].length !== matrix[row].length) {
      return false;
    }
  }

  return true;
}

function isValidMatrices(matrixA, matrixB) {
  if (!(areColumsEqual(matrixA) && areColumsEqual(matrixB))) {
    return false;
  }

  if (matrixB.length !== matrixA[0].length) {
    return false;
  }

  return true;
}

function areEmpty(matrixA, matrixB) {
  const isEmptyArray = matrixA.length === 0 && matrixB.length === 0;

  return isEmptyArray || matrixA[0].length === 0 && matrixB[0].length === 0;
}

function getProductRow(matrixA, matrixB, row1) {
  const productRow = [];

  for (let col2 = 0; col2 < matrixB[0].length; col2++) {
    let product = 0;

    for (let row2 = 0; row2 < matrixB.length; row2++) {
      product += matrixA[row1][row2] * matrixB[row2][col2];
    }

    productRow.push(product);
  }

  return productRow;
}

function multiplyMatrices(matrixA, matrixB) {
  if (areEmpty(matrixA, matrixB)) {
    return matrixA;
  }

  if (!isValidMatrices(matrixA, matrixB)) {
    return NaN;
  }
  const productArray = [];

  for (let row1 = 0; row1 < matrixA.length; row1++) {
    productArray.push(getProductRow(matrixA, matrixB, row1));
  }
  return productArray;
}

/*------------------------ TESTING SECTION ----------------------------*/
function areEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function displayMessage(matrixA, matrixB, actual) {
  const expected = [matrixA.length, matrixB[0].length];
  const actualMatrix = [actual.length, actual[0].length];
  const status = areEqual(expected, actualMatrix) ? "✅" : "❌";

  console.log(status, actual);
}

function testMultipyMatrices(matrixA, matrixB) {
  const actual = multiplyMatrices(matrixA, matrixB);
  if ("" + actual === "NaN" || actual.length === 0 || actual[0].length) {
    console.log("✅", actual);
    return;
  }

  displayMessage(matrixA, matrixB, actual);
}

function testInvalidCases() {
  console.log("  ---- invalid cases ------");
  testMultipyMatrices([[1], [1, 2]], [[1], [1]]);
  testMultipyMatrices([[1, 2], [1, 2]], [[1], [1, 2]]);
  testMultipyMatrices([[1, 2], [1, 2]], [[1, 2]]);
}

function testEqualMatrices() {
  console.log("\n -------  equal matrices ---------");
  testMultipyMatrices([[]], [[]]);
  testMultipyMatrices([], []);
  testMultipyMatrices([[1]], [[1]], [[1]]);
  testMultipyMatrices([[1, 2], [1, 2]], [[1, 2], [1, 2]]);
  testMultipyMatrices([[2, 3], [1, 2]], [[1, 0], [0, 1]]);
  testMultipyMatrices([[1, 2, 3], [1, 2, 3], [1, 2, 3]], [[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
  testMultipyMatrices([[1, 2, 3], [1, 2, 3], [1, 2, 3]], [[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
}

function testUnEqualMatrices() {
  console.log("\n ----- unequal matrices -------")
  testMultipyMatrices([[1, 2, 3], [1, 1, 1]], [[1, 2], [1, 2], [1, 2]]);
  testMultipyMatrices([[1, 2, 3]], [[1], [1], [1]]);
  testMultipyMatrices([[1, 2]], [[3], [4]]);
  testMultipyMatrices([[1, 2, 3], [1, 1, 1]], [[1], [1], [1]]);
}

function testAll() {
  testInvalidCases();
  testEqualMatrices();
  testUnEqualMatrices();
}

testAll();