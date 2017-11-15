// col = kebawah
// row = kesamping 
function createNestedArr (jumlahCol,jumlahRow){
    var newArr = []
    for(var i=0; i < jumlahCol; i++){
      var row = []      
      for(var j=0; j < jumlahRow; j++){
        let alphabet = 'abcdefghijklmnofqrstuvwxyj'
        let alphabetSplit = alphabet.split('')
        let random = Math.floor((Math.random() * alphabet.length));
        row.push(alphabet[random]) 
      }
      newArr.push(row)
    }
    return newArr  
}

console.log(createNestedArr(3,5))
console.log(createNestedArr(2,4))