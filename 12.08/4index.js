//Проверка, пустой ли объект (в нем нет свойств) или вывод, сколько в нем свойств.

var newObj = {
	'lol' : 1,
	'kek' : 2
}
var count = 0;

function isEmptyObj(obj) {
	for (var key in newObj){
		count++;
	}
	return (count == 0) ? true : false;
}

console.log((isEmptyObj(newObj)) ? true : 'Нет, этот объект не пустой. В нем ' + count + ' штук объектов');