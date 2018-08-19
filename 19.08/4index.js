//добавить класс в строку
var obj = {
  className: 'open menu'
}

var arr = [];
var prop = obj.className;
var arr = prop.split(' ');
//console.log(arr);
arr.splice(arr.length, 0, 'lolkek');
//console.log(arr);
var result = arr.join(' ');
console.log(result);