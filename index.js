function randomHuruf(arr){
    let num=0;
    num = Math.floor(Math.random()*arr.length);
    // console.log(num);
    return arr[num];
}


function createNestedArr(Column,Row){
  let huruf='abcdefghijklmnopqrstuvwxyz'
  let arr =[]
  for(let i=0;i<Column;i++){
    arr.push([])
    for(let j=0;j<Row;j++){
      arr[i].push(randomHuruf(huruf))
    }
  }
 return arr;
}


//driver Code
console.log(createNestedArr(3,5));
console.log(createNestedArr(4,6));
