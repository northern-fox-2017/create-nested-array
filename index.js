function createNestedArr(jumlahCol,JumlahRow){
  let arr = []
  let abjad = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i <= JumlahRow; i++){
    arr.push([]);
    for(let j = 0; j <= jumlahCol; j++){
      let huruf = abjad.charAt(Math.floor(Math.random() * abjad.length));
      arr[i].push(huruf)
    }
  }
  console.log(arr)
}

//driver
createNestedArr(4,3)
