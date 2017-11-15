function nestedArr(jumlahCol,jumlahRow) {
  let abjad = 'abcdefghijklmnopqrstuvwxyz';
  let arr=[];
    for (let i = 0; i < jumlahCol; i++) {
      arr.push([])
        for (let j = 0; j < jumlahRow; j++) {
          arr[i].push(abjad[Math.floor(Math.random() * 26)])
        }
    }
    return arr
}

console.log(nestedArr(3,5));
console.log(nestedArr(5,2));
