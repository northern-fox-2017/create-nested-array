function createNestedArr (jumlahCol, jumlahRow) {
  // YOUR CODE HERE
  let abjad = 'abcdefghijklmnopqrstuvwxyz'
  let arr = [];

  for (let i = 0; i < jumlahRow; i++) {
    arr.push([])
    // console.log(arr)
    for (let j = 0; j < jumlahCol; j++) {
    arr[i].push(abjad[Math.floor(Math.random() * abjad.length)])
    }
  }
  return arr;
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(3,4))
console.log(createNestedArr(6,2))
