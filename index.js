function nestedArr(jumlahRow, jumlahCol) {

  let row = [];
  for(let i=0; i<jumlahRow; i++) {
    row.push([])
    for(let j=0; j<jumlahCol; j++) {
      row[i].push(randomWord());
    }
  }
return row
}

function randomWord() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var alphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  // console.log(alphabet);
  return alphabet
}

console.log(nestedArr(3,5));
console.log(nestedArr(2,4));
