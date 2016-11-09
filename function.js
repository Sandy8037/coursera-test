function mul (x, y) {
  return x * y;
};

mul.version = "v.7.1";
console.log(mul.version);

function makeMul (multi) {
  var myFunc = function (x) {
    return multi * x;
  };
  return myFunc;
};

var mul3 = makeMul(3);
console.log(mul3(3));
var twice2 = makeMul(2);
console.log(twice2(100));

function doOperation (x, operation) {
  return operation(x);
};

var result = doOperation(3, mul3);
console.log(result);
result = doOperation(100, twice2);
console.log(result);
