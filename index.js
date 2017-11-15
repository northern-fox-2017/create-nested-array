var generateRandomNumber = (min, max) => {
  var randomNum = Math.random()
  randomNum = randomNum * (max - min + 1)
  randomNum = Math.floor(randomNum)
  randomNum = randomNum + min
  return randomNum
}

var createNestedArr = (rowCount, colCount) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  var result = []
  for (let i = 0; i < rowCount; i++) {
    var row = []
    for (let j = 0; j < colCount; j++) {
      row.push(alpha[generateRandomNumber(0, 24)])
    }
    result.push(row)
  }
  return result
}

console.log(createNestedArr(3, 5))
console.log(createNestedArr(2, 4))