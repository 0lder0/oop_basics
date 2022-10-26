class Shape {

    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        return this.sides * this.sideLength;
    }

}
let square = new Shape('square', 4, 5)
console.log(square.calcPerimeter())
let triangle = new Shape('triangle', 3, 3)
console.log(triangle.calcPerimeter())

console.log(square)
console.log(triangle)

class Square extends Shape {
    calcArea() {
        return this.sideLength ** 2
    }
}
let ioi = new Square('square', 4, 10)
console.log(ioi.calcArea())
console.log(ioi.calcPerimeter())