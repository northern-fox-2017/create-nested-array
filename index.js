function createNestedArr(jumlahCol, jumlahRow){
  // YOUR CODE HERE
  function randomChar(){
    //Function thats generate random character
    const chars = ['a','b','c','d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t','u' ,'v' ,'w' ,'x' ,'y', 'z' ];
    return chars[ Math.floor( Math.random() * 26 )];
  }

  let arrNew = [];
  for (let i = 0; i < jumlahRow; i++){
    arrNew.push([]);
    for (let j = 0; j < jumlahCol; j++){
      arrNew[i].push( randomChar());
    }
  }
  return arrNew;
}

// DRIVE 
console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));