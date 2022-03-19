//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.findUniqueSides = new Set(sides);
  }
  get isTriangleValid() {
    const isLengthPositive = this.sides.every((length) => length > 0);
    const longestToShortest = this.sides.sort((a, b) => b - a);
    const longest = longestToShortest[0];
    const sumOfTwoLengths = longestToShortest[1] + longestToShortest[2];
    return isLengthPositive && sumOfTwoLengths >= longest; 
  }
  get isEquilateral() {
    return this.isTriangleValid && this.findUniqueSides.size === 1;
  }
  get isIsosceles() {
    return this.isTriangleValid && this.findUniqueSides.size <= 2;
  }
  get isScalene() {
    return this.isTriangleValid && this.findUniqueSides.size === 3;
  }
}