function createNestedArr(jumlahRow, jumlahCol){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var tampungCol = [];

    for(var i=0; i<jumlahRow; i++){
        var tampungRow = [];
        for(var j=0; j<jumlahCol; j++){
            tampungRow.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
        }
        tampungCol.push(tampungRow);
    }
    console.log(tampungCol);
}
createNestedArr(2,4);