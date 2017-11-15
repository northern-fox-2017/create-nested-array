function createNestedArray(jumlahRow, jumlahCol) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let totalResult = [];
  let result = '';
    for (var j = 0; j <jumlahRow ; j++) {
      totalResult.push([])
    for (var i = 0; i < jumlahCol; i++) {
      result = alphabet[Math.floor(Math.random() * alphabet.length )]
      totalResult[j].push(result)
    }
  }return totalResult;
}
console.log(createNestedArray(3, 5));
console.log(createNestedArray(2, 4));
