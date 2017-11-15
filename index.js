function createNestedArr(jumlahCol, jumlahRow) {
    var result = [];

    for (var i = 0; i < jumlahRow; i++) {
        result.push([]);
    }

    for (var j = 0; j < result.length; j++) {
        for (var k = 0; k < jumlahCol; k++) {
            var randomNumber = Math.floor(Math.random() * 26); // 26 is the total of alphabet
            var randomAlphabet = String.fromCharCode(97 + randomNumber) // +65 to get uppercase letter + 97 to get lowercase letter
            // console.log(j + ' ' + k);
            result[j].push(randomAlphabet);
        }
    }
    return result;
}

// TEST CASE
console.log('Baris 3 Kolom 5:');
console.log(createNestedArr(5, 3));

console.log('Baris 2 Kolom 4:');
console.log(createNestedArr(4, 2));