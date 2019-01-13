//добавить класс в строку
const prompt = require('prompt-sync')();
var obj = {
  className: 'open menu'
}
/*
var arr = [];
var prop = obj.className;
var arr = prop.split(' ');
//console.log(arr);
arr.splice(arr.length, 0, 'lolkek');
//console.log(arr);
var result = arr.join(' ');
console.log(result);
*/	

var addClass = (nc) => {
	var prop = obj.className;
	var arr = prop.split(' ');
	var addon = '';
	for (var key in arr) {
		if(nc !== arr[key]) {
			ke
		}
	}
	ln = arr.length + 1;
	arr[ln] = addon;
	var result = arr.join(' ');
	console.log(result);
}

nc = prompt('Введите новый элемент', '');
addClass(nc)