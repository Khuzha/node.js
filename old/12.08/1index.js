//Объекты: https://learn.javascript.ru/object

var firstObj = {};

firstObj['name'] = 'Вася';
firstObj['surname'] = 'Петров';
firstObj['name'] = "Сергей";
delete firstObj['name'];

//тоже самое:

var firstObj = {
	name = 'Вася';
	surname = 'Петров';
	name = "Сергей";
};

//проверка существования свойства объекта:

'name' in firstObj; //true