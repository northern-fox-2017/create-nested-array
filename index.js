function createNestedArr(jumlahCol, jumlahRow, nestedArr = []){
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    //let nestedArr = []

    if(jumlahCol == 0){
      console.log(nestedArr);
      return 
    }else{
      arrpush = []
      for(let i = 0; i < jumlahRow; i++){
        arrpush.push( abjad[Math.floor(Math.random() * abjad.length)] )
      }
      nestedArr.push( arrpush )
      jumlahCol -= 1
      return createNestedArr( jumlahCol, jumlahRow, nestedArr )
    }
}

createNestedArr(3,5);
