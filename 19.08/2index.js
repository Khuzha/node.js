const prompt = require('prompt-sync')();

let name = [];

for (let i = 0; name[i] !== undefined; i++) {
	name[i] = prompt('Вводите имена');
}

console.log(name);