// String localeCompare

var a = ['aaa', 'aa', 'a', 'AAA', 'AA', 'A'];
a.sort(function (a, b) {
  return a.localeCompare(b);
});

console.log(a);
