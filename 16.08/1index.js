var m = { name: "Sardor" };
var n = m;
console.log('m.name = ' + m.name);
console.log('n.name = ' + n.name);

m.name = 'Jakh'; //при этом поменяется и объект n
console.log('n.name измененное = ' + n.name);

//---------------------

var one = {
	name: "arbot",
	base: "tg",
}
var two = {};

for (var key in one) { 
	two[key] = one[key]; //правильное копирование данных из свойств объекта с созданием нового объекта, а не только ссылки
}
console.log(two);
for (var key in two) {
console.log('one = ' + one[key] + ', two = ' + two[key]);
}