//Мораль файла: только функции, объявленные в формате
//var sayHi = function(){} можно вызывать в коде 
//до того места, где они записаны
//Остальные будут крашиться

//sayHi(); - НЕ работает

var sayHi = function(){
	console.log('Hi');
}

//-----------------------------

// sagenHallo(); - работает

function sagenHallo() {
	console.log('Hallo');
}

//-----------------------------


//aytSalom(); - не работает

var aytSalom = () => {
	console.log('Salom');
}

/*
ПРОСТО ПРИМЕР КОДА (использование Function Expression с тернарным оператором ?):

var age = prompt('Сколько вам лет?');

var sayHi = (age >= 18) ?
  function() { alert('Прошу Вас!');  } :
  function() { alert('До 18 нельзя'); };

sayHi();

 */