// Function Invocation Pattern

var myObject = {
  value: 0,
  increment: function (inc) {
  	this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
myObject.increment(2);

function add(a, b) {
  return a + b;
};

myObject.double = function () {
  var that = this;

  var helper = function () {
    that.value = add(that.value, that.value);
  };
  helper();
};

myObject.double();
console.log(myObject.value);
