// Arrays
var array = new Array();
array[0] = "Sandy";
array[1] = 3;
array[2] = function (name) {
  console.log("Hello " +name);
};
array[3] = {
  course: "HTML, CSS & JS"
};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

var names = ["Sandy", "Devarapalli"];
console.log(names);

for (var i = 0; i < names.length; i++){
  console.log("Hello " + names[i]);
}

names[100] = "Ark";
for (var i = 0; i < names.length; i++){
  console.log("Hello " + names[i]);
}

var myObj = {
  name: "Sandy",
  course: "HTML/CSS/JS",
  platform: "Coursera"
};

for (var prop in myObj) {
  console.log(prop + ": " + myObj.prop);
}

var names2 = ["Sandy", "Devarapalli", "Ark"];
names2.greeting = "Hi!"

for (var name in names2) {
  console.log("Hello " +names2[name]);
}
