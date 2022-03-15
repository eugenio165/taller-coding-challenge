
function getSubsets<T>(input: Array<T>): Array<Array<T>> {
  return input.reduce((allSets: Array<Array<any>>, currentItem) =>
    allSets.concat(allSets.map((item) => [currentItem, ...item])), [[]]);
}

function getMinimumUnconstructibleChange(array: number[]) {

  for (let i = 0; i < array.length - 1; i++) {
    const previousNum = array[i];
    const nextNum = array[i + 1];
  
    if (nextNum - previousNum > 1) {
      return previousNum + 1;
    }
  }

  return array[array.length] + 1;
}

function isValidCoinArray(array: any[]) {
  return array.every((e) => typeof e === 'number');
}

const invalidCoins = [5, '7', null, undefined];
const coins = [5, 7, 1, 1, 2, 3, 22];

if (!isValidCoinArray(coins)) {
  throw 'Not valid coin array!';
}


const subsets = getSubsets(coins);

const allPossibleSums = subsets.map((items) => items.reduce((acc, current) => acc + current, 0));

const distinctPossibleSums = [...new Set(allPossibleSums)];

distinctPossibleSums.sort((a, b) => a - b);

console.log(getMinimumUnconstructibleChange(distinctPossibleSums));
