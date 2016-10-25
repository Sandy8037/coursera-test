// Array Dimensions

Array.dim = function (dimension, initial) {
  var a = [], i;
  for(i = 0; i < dimension; i++){
    a[i] = initial;
  }
  return a;
};

var myArray = Array.dim(10, 0);
console.log(myArray);
