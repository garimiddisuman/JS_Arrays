// Add each element to all subsets. 

function concat(array, element) {
  const concatenatedArray = [];

  for (let i = 0; i < array.length; i++) {
    concatenatedArray.push(array[i]);
  }

  concatenatedArray.push(element);
  return concatenatedArray;
}

function generatePowerSet(array) {
  const powerSet = [[]];

  for (let elementIndex = 0; elementIndex < array.length; elementIndex++) {
    const limit = powerSet.length;

    for (let index = 0; index < limit; index++) {
      powerSet.push(concat(powerSet[index], array[elementIndex]));
    }
  }

  return powerSet;
}

function makeMessage(array) {
  const message = "|array : [" + array + "]\n\n   |output : ";

  return message;
}

function testGeneratePowerSet(array) {
  const actual = generatePowerSet(array);
  const status = actual.length === (2 ** array.length) ? '✅' : '❌';
  const message = makeMessage(array, actual);

  console.log(status, message, actual, "\n\n");
}

function testAll() {
  testGeneratePowerSet([]);
  testGeneratePowerSet([1]);
  testGeneratePowerSet([1, 2]);
  testGeneratePowerSet([1, 2, 3]);
  testGeneratePowerSet([1, 2, 3, 4]);
  testGeneratePowerSet([1, 2, 3, 4, 5]);
  testGeneratePowerSet(["a", "b", "c", "d", "e", "f"]);
}

testAll();