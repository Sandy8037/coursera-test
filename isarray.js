// Is Array

var a = [1, 2];

var is_array = function (value) {
  return value &&
    typeof value === 'object' &&
    value.constructor === Array;
};

console.log(is_array(a));
