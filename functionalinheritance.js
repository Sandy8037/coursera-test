// Functional Inheritance

var mammal = function (spec) {
  var that = {};

  that.get_name = function () {
    return spec.name;
  };

  that.says = function () {
    return spec.saying || '';
  };

  return that;
};

var myMammal = mammal({name: 'Herb'});

console.log(myMammal.get_name());

var cat = function (spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec);
  that.purr = function (n) {
    var i, s = '';
    for(i = 0; i < n; i += 1) {
      if(s) {
        s += '-';
      }
      s += 'r';
    }
    return s;
  };
  that.get_name = function () {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };
  return that;
};

var myCat = cat({name: 'Henrietta'});

console.log(myCat.get_name());
