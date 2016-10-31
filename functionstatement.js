// Function Statement vs Function Expression

// function are values and foo function would become global value which is bad

// var foo = function foo() {
// var a;
// console.log("hi");
// };

// Solution use function inside ()

(function () {
  var a;
  console.log("hi");
})();
