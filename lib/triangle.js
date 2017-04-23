'use strict'
var Figura = require('ull-shape-aitor-nestor-omar-35l2v3-1')

class Triangle extends Figura {
    constructor(options) {
      Figura.Shapes.Triangle = Triangle;
      super("Triangle", options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      return 0.5 * this.width * this.height;
    }
}

let a = new Triangle({ width: 100, height: 100 });
var result = a.getArea();
console.log(result)