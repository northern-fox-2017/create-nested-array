let createNestedArr = (jumlahCol, jumlahRow, arr) => {
  // for (let i = 0; i < jumlahCol; i++) {
  if (arr.length === jumlahCol){
    return arr
  }
  let arrKosong = []
  for (var j = 0; j < jumlahRow; j++) {
    let random = String.fromCharCode(Math.random()*(122 - 97) + 97);
      arrKosong.push(random)
  }
  arr.push(arrKosong)
  // }
  return createNestedArr(jumlahCol,jumlahRow,arr);
}


console.log(createNestedArr(4,5,[]))
