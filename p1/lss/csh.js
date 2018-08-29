//greedy algorithm
function cash(){
	let coinsArray = [25, 10, 5, 1],
		coinsAmount = 0,
		change;

		do {
			change = prompt('Change amount?') * 100;
		}
		while( change < 0 || !change );

	
		coinsArray.forEach( coin => {
			while( change >= coin ){
				change -= coin;
				coinsAmount++;
			}});

		console.log(coinsAmount);
}
