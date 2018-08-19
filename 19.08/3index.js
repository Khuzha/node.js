//КОД НЕ ДОРАБОТАН!
const prompt = require('prompt-sync')();
let names = [];
let i = 0;

for (; true; i++) {
	if (i == 0) {
		names[i] = prompt('Введите первое имя. Для завершения ввода оставьте строку пустой и просто нажмите Enter: ');
		if (names[i] === undefined || names[i] === null || names[i] === '') {
			console.log('Вы не ввели ни одного имени.');
			break;
		} 
	} else {
		names[i] = prompt('Вводите следующие имена: ');
		if (names[i] === undefined || names[i] === null || names[i] === '') {
			console.log('Спасибо, ввод завершен. Вы Ввели всего имен: ' + names.length + '. Вот они: ' + names);
			break;
		} 
	}
}

let ans = 'NaN';
if (i > 0) {
	let quest = prompt('Вы хотите удалить какие-нибудь имена? Введите "Да" или "нет"');
		switch(quest) {
		case 'Да': case 'да': case 'Да ': case 'да ': case ' Да': case ' да':
		ans = true;
		break;
		case 'нет':	case ' нет': case 'нет ': case 'Нет': case ' Нет': case 'Нет ':
		ans = false;
		break;
		default: 'Я Вас не совсем понял. Пожалуйста, ответьте корректно "Да" или "Нет".'
		ans = false;
		break;
	}
}


if (ans) {
	let min, max;
	min = +prompt('Введите числовым значением, с какого имени Вы хотите начать удаление:');
	function isNumeric(n) {
		return !isNaN(parseFloat(n))&&isFinite(n);
	}
	if(!isNumeric(min)); {
		let i2;
		while (!isNumeric(min)){
			min = +prompt('Вы ввели некорректное значение. Введите числовым значением, с какого имени Вы хотите начать удаление: ');
			i2++;
			if(i2 <= 3) {
				 min = +prompt('Вы ввели некорректное значение. Введите числовым значением, с какого имени Вы хотите начать удаление: ');
			} else {
				let quest2 = prompt('Вы хотите выйти? Введите "да" или "нет", чтобы продолжить.')
				switch (quest2) {
					case 'нет':	case ' нет': case 'нет ': case 'Нет': case ' Нет': case 'Нет ':
					console.log('Хорошо. Продолжим.');
					while (!isNumeric(min)){
						min = +prompt('Введите числовым значением, с какого имени Вы хотите начать удаление: ');
					}
					break;
					default: 
					console.log('Окей, закончили. До свидания!');
				}
			}
		}
	} //else {
	//max = +prompt('Отлично. Введите числовым значением, сколько имен Вы хотите удалить после имени ' + names[min]);

}
 else {
	console.log('Хорошо. До свидания!');
}
