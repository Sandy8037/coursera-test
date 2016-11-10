// Immediately Invoked Function Expression

// var sandyGreeter = {};
// sandyGreeter.name = "Sandy";
// var greeting = "Hello";
// sandyGreeter.sayHello = function () {
//   console.log(greeting + sandyGreeter.name);
// }
//
// var devGreeter = {};
// devGreeter.name = "Devarapalli";
// var greeting = "Hi";
// devGreeter.sayHi = function () {
//   console.log(greeting + devGreeter.name);
// }
// sandyGreeter.sayHello();
// devGreeter.sayHi();

(function (window) {
  var sandyGreeter = {};
  sandyGreeter.name = "Sandy";
  var greeting = "Hello";
  sandyGreeter.sayHello = function () {
    console.log(greeting + sandyGreeter.name);
  }

  window.sandyGreeter = sandyGreeter;
})(window);

(function (window) {
  var devGreeter = {};
  devGreeter.name = "Devarapalli";
  var greeting = "Hi";
  devGreeter.sayHi = function () {
    console.log(greeting + devGreeter.name);
  }

  window.devGreeter = devGreeter;
})(window);

sandyGreeter.sayHello();
devGreeter.sayHi();
