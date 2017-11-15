const generateNumber = () => {
  return Math.floor((Math.random() * 26));
}

const randomAlphabet = (num) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const subArray = [];

  for (let i = 0; i < num; i++) {
    subArray.push(alphabet[generateNumber()]);
  }
  return subArray;
}

const createNestedArr = (row, col) => {
  const arrayResult = [];

  for (let i = 0; i < row; i++) {
    arrayResult.push(randomAlphabet(col));
  }
  return arrayResult;
}

console.log(createNestedArr(3, 5));