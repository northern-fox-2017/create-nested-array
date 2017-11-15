const random = 'abcdefghijklmnopqrstuvwxyz';
function createNestedArray(jumlahRow, jumlahCol) {
    let array = [];
    for (let i = 0; i < jumlahRow; i++) {
        array.push([]);
        for (j = 0; j < jumlahCol; j++) {
            array[i].push(random[Math.floor(Math.random() * random.length)]);
        }
    }

    return array;
}
// function randomm(){
//     randomCount++;
//     return randomCount
// }

// var nestedArray = (jumlahRow,jumlahCol)=>{
//     let array = [];
//     let randomCount = 0;
//     for (let i = 0; i < jumlahRow; i++) {
//         array.push([]);
//         for (j = 0; j < jumlahCol; j++) {
//             array[i].push(random[randomCount]);
//             randomCount++;
//         }
//     }
//     return array;
// } ;
console.log(createNestedArray(3, 5))
console.log(createNestedArray(2, 4))
