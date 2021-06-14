// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
      return this.sides.length;  
    }

    get perimeter() {
        return this.sides.reduce((memo, side) => memo + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            const sideA = this.sides[0];
            const sideB = this.sides[1];
            const sideC = this.sides[2];
            if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
                return true;
            }
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            const sideA = this.sides[0];
            const sideB = this.sides[1];
            const sideC = this.sides[2];
            const sideD = this.sides[3];
            if (sideA === sideB && sideB === sideC && sideC === sideD) {
                return true;
            }
        }
        return false;
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2;
        }
    }
}