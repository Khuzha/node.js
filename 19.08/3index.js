const prompt = require('prompt-sync')();

let names = [];

for (let i = 0; true; i++) {
	let answer;

	if (i === 0){
		answer = prompt('perviy');
	}

	answer = prompt('neperviy');

	if(answer == ''){
		console.log(names);
		break;
	} else {
	(names[i] = answer); 
	}
}