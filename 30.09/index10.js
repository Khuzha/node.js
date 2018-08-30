function sum(a) {
	return function(b) {
		return a + b;
	}
}
//sum(1)(2);

console.log(sum(1)(2));