'use strict'

/**
* Creación de paquetes npm - Triangle
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1-triangle
*
* Néstor García Moreno
*
* Equipo: aitor-nestor-omar
*
* Creación de un paquete npm con el código de la clase "Triangle" para el cálculo de área
*/

let Figura = require('@aitor-nestor-omar/ull-shape')

class Triangle extends Figura {
    constructor(options) {
      Figura.Shapes.Triangle = Triangle;
      super("Triangle", options)
      this.width = options.width;
      this.height = options.height;
    }
    
/**
* La función getArea calcula el área de un cuadrado
* @param hereda directamente de Figura
* @return {number} retorna el área del cuadrado
*/
    
    getArea() {
      return 0.5 * this.width * this.height;
    }
}


module.exports = Triangle; 