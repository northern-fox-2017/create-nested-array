var generateRandomNumber = (min, max) => {
  let randomNum = Math.random()
  randomNum = randomNum * (max - min + 1)
  randomNum = Math.floor(randomNum)
  randomNum = randomNum + min
  return randomNum
}

var createNestedArr = (rowCount, colCount) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let result = []
  for (let i = 0; i < rowCount; i++) {
    let row = []
    for (let j = 0; j < colCount; j++) {
      row.push(alpha[generateRandomNumber(0, 24)])
    }
    result.push(row)
  }
  return result
}

console.log(createNestedArr(3, 5))
console.log(createNestedArr(2, 4))