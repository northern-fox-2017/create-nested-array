function randomAlphabet() {
  let huruf = 'abcdefghijklmnopqrstuvwxyz';
  let random = Math.floor(Math.random() * huruf.length);
  return huruf[random];
}

function nestedArray(baris, kolom) {
  let arr = [];

    for(let i = 0 ; i < baris ; i++) {
      arr.push([]);
        for(let j = 0 ; j < kolom ; j++) {
          let rand = randomAlphabet();
          arr[i].push(rand);
        }
    }
    return arr;
}

console.log(nestedArray(3,5));
console.log(nestedArray(9,3));
