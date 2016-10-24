// Method Invocation Pattern

var myObject = {
  value: 0,
  increment: function (inc) {
  	this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
myObject.increment(2);

console.log(myObject.value);
