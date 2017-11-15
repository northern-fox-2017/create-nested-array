'use strict';

function createNestedArr(jumlahRow, jumlahCol) {
    let result = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomIndex = 0;

    for (let i = 0; i < jumlahRow; i++) {
        result.push([]);
        for (var j = 0; j < jumlahCol; j++) {
            randomIndex = Math.floor(Math.random() * 26);
            result[i].push(alphabet[randomIndex]);
        }
    }
    console.log(result);
}

createNestedArr(3, 5);