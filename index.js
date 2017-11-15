var createNestedArr = (jumlahCol, jumlahRow) => {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let text = '';
  let arr = [];

  for (let i = 0; i < jumlahRow; i++) {
    arr.push([]);
    for(let j = 0; j < jumlahCol; j++) {
      arr[i].push(letters.charAt(Math.random() * letters.length))
    }
  }
  return arr;
}

console.log(createNestedArr(5, 3));

// output :
//[ ['a', 'b', 'a', 'b', 'c'],
//  ['a', 'b', 'a', 'b', 'c'],
//  ['a', 'b', 'a', 'b', 'c'] ]

console.log(createNestedArr(4, 2));

// output :
//[ ['a', 'b', 'a', 'b'],
//  ['a', 'b', 'a', 'b'] ]
