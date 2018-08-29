function mario(){

	var number = (number > 0 || number < 23) ? number : prompt('Enter non-negative integer no greater than 23:');

	let	space = '',
		hash = '';

	for (let i = 0; i < number; i++){
		for( var s = number - 1; s > i; s-- ){
			space += ' ';
		}

		for( var h = 0; h <= i; h++){
			hash += '#';
		}

		console.log(`${space}${hash}  ${hash}`);

		space = '';
		hash = '';
	}
}
