function getRandom(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}
function createNestedArr(jumlahRow, jumlahCol){
	let arabic = 'abcdefghijklmnopqrstuvwxyz';
	let arr = [];
	for(let i = 0; i < jumlahCol; i++){
		arr.push([]);
		for(let j = 0; j < jumlahRow; j++){
			arr[i].push(arabic[getRandom(0, arabic.length - 1)]);
		}
	}
	return arr;
}

console.log(createNestedArr(4, 2))