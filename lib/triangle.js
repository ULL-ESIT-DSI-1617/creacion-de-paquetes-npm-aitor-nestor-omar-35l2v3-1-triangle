'use strict'

var figura = require('ull-shape-aitor-nestor-omar')
var shape = figura.Shape

class Triangle extends Figura {
  constructor(options) {
    Shapes.Triangle = Triangle;
    super("Triangle",options)
    this.width = options.width;
    this.height = options.heigth; 
  }
  
  getArea() {
    return 0.5 * this.width * this.heigth;
  }
}