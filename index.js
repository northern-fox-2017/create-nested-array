function createNestedArr(jumlahBaris, jumlahKolom){
	var arr = []
	for(var i = 0; i < jumlahBaris; i++){
		arr.push([]) 
		for(var j = 0; j < jumlahKolom; j++){
			arr[i].push(randomAlphabet())			
		}
	}
	return arr
}

console.log(createNestedArr(7, 9))
console.log("=====================")
console.log(createNestedArr(5, 5))
console.log("=====================")

function randomAlphabet(){
	var tampung = '';
	var alfabet = 'abcdefghijklmnopqrstuvwxyz'
	for(var i = 0; i < 1; i++){
		tampung += alfabet.charAt(Math.floor(Math.random() * alfabet.length));
	}
	return tampung 
}

console.log(randomAlphabet())