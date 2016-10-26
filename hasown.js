// Object hasOwnProperty

var a = {member: true};
var b = Object.create(a);
console.log(a.hasOwnProperty('member'));
console.log(b.hasOwnProperty('member'));
console.log(b.member);
