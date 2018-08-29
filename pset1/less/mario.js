function mario (number) {
	let space = '',
		hash = '';

	for (let i = 0; i < number; i++){
		for (var s = number - 1; s > i; s--){
				space += ' ';
		}

		for (var h = 0; h <= i + 1; h++){
				hash += '#';
		}

		console.log(`${space}${hash}`);

		space = '';
		hash = '';
	}
}
