'use strict'

function createNestedArr(jumlahRow, jumlahCol) {
  let arr = [],
      abjad = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < jumlahRow; i++) {
    arr.push([])
    for (let j = 0; j < jumlahCol; j++) {
      var randomStr = abjad.charAt(Math.floor(Math.random() * abjad.length))
      arr[i].push(randomStr)
    }
  }
  console.log(arr);
}

createNestedArr(3, 5)
createNestedArr(4, 2)
