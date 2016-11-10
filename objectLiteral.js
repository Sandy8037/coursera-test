var literalCircle = {
  radius: 10,

  getArea: function () {
    var that = this;
    console.log(this);
    var increaseRadius = function () {
      that.radius = 20;
    };

    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
