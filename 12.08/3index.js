//Объекты: перебор свойств: https://learn.javascript.ru/object-for-in

//просто скопированный пример:

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

var count = 0;

for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение
  count++;
  console.log( "Ключ: " + key + ", значение: " + menu[key] + ';');
}
console.log('Всего свойств: ' + count + '.');
