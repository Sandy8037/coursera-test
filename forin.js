// for in example

var a = { first: "Sandy",
        last: "Devarapalli",
        id: 9};

var b;

for (b in a) {
  if (a.hasOwnProperty(b)) {
    console.log(b);
  }
}
