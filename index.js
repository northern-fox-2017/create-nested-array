function createNestedArr (jmlRow, jmlCol) {
  var result = [];
  var abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (var i = 0; i < jmlRow; i++) {
    result.push([])
    for (var j = 0; j < jmlCol; j++) {
      var random = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
      result[i].push(abjad[random]);
    }
  }
  return result;
}

console.log('--- Satu ---\n', createNestedArr(3, 5));
console.log('--- Dua ---\n', createNestedArr(2, 4));
