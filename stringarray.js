// String Array Sorting

var a = [3, 12, 11, 11, 'aa', 'a', 'b'];
a.sort(function (a, b) {
  if(a === b){
    return 0;
  }
  if(typeof a === typeof b) {
    return a < b ? -1 : 1;
  }
  return typeof a < typeof b ? -1 : 1;
});

console.log(a);
