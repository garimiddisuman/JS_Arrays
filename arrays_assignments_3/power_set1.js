// Using binary method..

function getIndices(n) {
  const indices = [];
  let index = 0;

  while (n !== 0) {
    if (n & 1) {
      indices.push(index);
    }
    index++;
    n = n >> 1;
  }

  return indices;
}

function getSubset(indices, set) {
  const subset = [];

  for (const indice of indices) {
    subset.push(set[indice]);
  }

  return subset;
}

function powerSet(set) {
  const allSubsets = [];

  for (let i = 0; i < Math.pow(2, set.length); i++) {
    const indices = getIndices(i);
    const subset = getSubset(indices, set);
    allSubsets.push(subset);
  }

  return allSubsets;
}

console.log(powerSet([1, 2]));