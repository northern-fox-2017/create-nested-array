function createNestedArr(jumlahCol, jumlahRow) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
  for(let i = 0; i < jumlahCol; i ++){
    arr.push([])
    for(let j = 0; j < jumlahRow; j++){
      arr[i].push(alphabet[Math.floor(Math.random() * alphabet.length)])
    }
  }
  return arr
}


console.log(createNestedArr(3,5))
console.log(createNestedArr(2,2));



















// function createNestedArr(jumlahRow, jumlahCol) {
//
//      var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//      var randomString = '';
//      var tampung = [];var hasil = [];
//
//      for(let i = 0; i < jumlahRow; i++){
//       tampung.push([])
//        for(let j = 0; j < jumlahCol; j++){
//         tampung[i].push(alphabet[Math.floor(Math.random() * alphabet.length)])
//        }
//
//      }
//     return tampung
// }
// console.log(createNestedArr(5,3))
