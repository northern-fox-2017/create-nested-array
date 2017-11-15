let createNestedArr=(jumlahCol,JumlahRow)=>{
    let  karakter = 'abcdefghijklmnopqrstuvwyz'
    let output= []
    for (let i = 0; i < JumlahRow; i++) {
        output.push([])
        for(var j = 0;j<jumlahCol;j++){
            output[i].push(karakter.charAt(Math.random()*karakter.length))
          } 
        
    }

    return output
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(2,4))