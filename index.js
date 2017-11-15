function createNestedArr(jumlahCol, jumlahRow) {
  let arr = [];

  let abjad = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < jumlahCol; i++) {
    arr.push([])
    for (let j = 0; j < jumlahRow; j++) {
      let acak = Math.floor(Math.random() * abjad.length)
      arr[i].push(abjad[acak]+' - '+acak)
    }
  }

  return arr;
}

console.log(createNestedArr(3,5));
console.log('\n --------------------- \n');
console.log(createNestedArr(2,4));
