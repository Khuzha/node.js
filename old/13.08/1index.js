//Самое большое значение среди всех свойств
//Код не дописан
"use strict";

var salaries = {
	'Herr Gross' : 55000,
	'Frau Klein' : 45000,
	'Herr Braun' : 52000
}

var arrSal = [];
var i = 0;
var k = 0;
var countOfPropsOfSalaries = 0;
for (var key in salaries) {
	arrSal[i++] = salaries['key'];
	countOfPropsOfSalaries++;
}

var maxSal = Math.max();
console.log(maxSal);
console.log('Максимальная зарплата у')