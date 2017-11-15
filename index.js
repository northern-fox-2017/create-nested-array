function createNestedArr(row, col) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var arr = []

  for (let i = 0; i < row; i++) {
    arr.push([])
    for(let j = 0; j < col; j++){
      arr[i].push(abjad[Math.floor(Math.random() * abjad.length)])
    }
  }
  return arr

}
console.log(createNestedArr(3, 5));
console.log(createNestedArr(4, 2));
