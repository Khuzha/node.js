//Рандомный победитель 10-го айфона

let names = 'Сардор, Вася, Петя, Коля, Боря'; //сюда через запятую вводим имена, ибо prompt() в терминале не работает
let arrayOfNames = names.split(','); //переводит строку в ячейки массива, разделяя их при каждой запятой
console.log('Все участники конкурса: ' + arrayOfNames);


// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log('Айфон Х выигрывает... барабанная дробь...:' + arrayOfNames[getRandomInt(0, arrayOfNames.length)]);
