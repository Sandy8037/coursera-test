// var name = "Sandy";
// function sayHello() {
//   console.log("Hello " +name);
// }
//
// name = "Devarapalli";
// function sayHi() {
//   console.log("Hello " +name);
// }
// sayHello();
// sayHi();

var sandyGreeter = {};
sandyGreeter.name = "Sandy";
sandyGreeter.sayHello = function () {
  console.log("Hello " + sandyGreeter.name);
}

var devGreeter = {};
devGreeter.name = "Devarapalli";
devGreeter.sayHi = function () {
  console.log("Hello " + devGreeter.name);
}
sandyGreeter.sayHello();
devGreeter.sayHi();
