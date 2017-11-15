function createNestedArr(jumlahRow, jumlahCol){
  function randomAlpha(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let random = alphabet[Math.floor(Math.random()*alphabet.length)]
    return random
  }
  let nestedArr = []
  for (var i = 0; i < jumlahRow; i++) {
    nestedArr.push([])
    for (var j = 0; j < jumlahCol; j++) {
      nestedArr[i].push(randomAlpha())
    }
  }
  return nestedArr
}

console.log(createNestedArr(3,5));
console.log(createNestedArr(2,4));