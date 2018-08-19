const prompt = require('prompt-sync')();
let names = [];
var i = 0;

for (; true; i++) {
	if (i == 0) {
		names[i] = prompt('Введите первое имя. Для завершения ввода оставьте строку пустой и просто нажмите Enter: ', 'Спасибо. Ввод имен завершен.');
		if (names[i] === 'Спасибо. Ввод имен завершен.' || names[i] === null || names[i] === '') {
			console.log(names[i]);
			break;
		} 
	} else {
		names[i] = prompt('Вводите имена: ', 'Спасибо. Ввод имен завершен.');
		if (names[i] === 'Спасибо. Ввод имен завершен.' || names[i] === null || names[i] === '') {
			names.pop();
			console.log(names[i]);
			break;
		} 
	}
}
console.log(names);