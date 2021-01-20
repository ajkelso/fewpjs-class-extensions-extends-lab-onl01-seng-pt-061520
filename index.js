// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides 
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((memo, side) => memo + side)
    }
}

class Triangle extends Polygon {
    get isValid() {
        function addSides(sides) {
            let result = false
            if ((sides[0] + sides[1]) > sides[2] && (sides[1] + sides[2]) > sides[0] && (sides[0] + sides[1]) > sides[1]) {
                result = true
            }
            return result
        }
        if (this.sides.length === 3 && addSides(this.sides)){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const equalSides = (side) => side === this.sides[0]
        if (this.sides.every(equalSides) && this.sides.length === 4) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}
