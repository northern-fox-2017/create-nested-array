function createNestedArr (jumlahRow, jumlahCol) {
  // YOUR CODE HERE
  let abjad = 'abcdefghijklmnopqrstuvwxyz'
  let arr = [];


//revisi
//ini untuk menentukan jumlah baris
  for (let i = 0; i < jumlahRow; i++) {
    arr.push([])
    // console.log(arr)

    // dan ini untuk menentukan jumlah kolom
    for (let j = 0; j < jumlahCol; j++) {
    arr[i].push(abjad[Math.floor(Math.random() * abjad.length)])
    }
  }
  return arr;
}

console.log(createNestedArr(5,3))
// console.log(createNestedArr(3,4))
// console.log(createNestedArr(6,2))
