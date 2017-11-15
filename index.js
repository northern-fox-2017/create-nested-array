function createNestedArr(jumlahCol, jumlahRow){
  let arr = [];
  let chars = 'abcdefghijklmnopqrstuvwxyz';
// console.log(huruf);

  for (var i = 0; i < jumlahRow; i++) {
    arr.push([]);
    for (var j = 0; j< jumlahCol; j++){
      let urutan = Math.floor(Math.random()*chars.length);
      let huruf = chars[urutan];
      arr[i].push(huruf);
    }
  }
  return arr;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));

//output:
//[ [ 'a', 'q', 'r', 's', 't'],
// [ 'u', 'k', 'a', 'e', 'i'],
// [ 'f', 'f', 'o', 'o' ,'o'] ]
