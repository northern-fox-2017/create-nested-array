// function createNestedArr(jumlahCol,JumlahRow){
//   let arr = []
//   let abjad = 'abcdefghijklmnopqrstuvwxyz'
//   for(let i = 0; i <= JumlahRow; i++){
//     arr.push([]);
//     for(let j = 0; j <= jumlahCol; j++){
//       let huruf = abjad.charAt(Math.floor(Math.random() * abjad.length));
//       arr[i].push(huruf)
//     }
//   }
//   console.log(arr)
// }

//driver



function createNestedArr(jumlahCol,jumlahRow,arr = []){
  let abjad = 'abcdefghijklmnopqrstuvwxyz';

  if(jumlahRow == 0){
    console.log(arr)
    return arr
  }
  else{
    var arrHuruf = []
    while(arrHuruf.length <= jumlahCol){
      let huruf = abjad.charAt(Math.floor(Math.random() * abjad.length));
      arrHuruf.push(huruf)
    }

  }
  arr.push(arrHuruf)
  return createNestedArr(jumlahCol,jumlahRow - 1,arr)
}


//driver

createNestedArr(5,3)
