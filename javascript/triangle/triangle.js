//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.isLengthGreaterThanZero();
    this.isTwoSidesLengthGreaterThanThird(); 
    this.isTriangleValid();
    this.findUniqueSides = new Set(sides);
  }
  isLengthGreaterThanZero() {
    return this.sides.every((length) => length > 0);
  }
  isTwoSidesLengthGreaterThanThird() {
    const longestToShortest = this.sides.sort((a, b) => b - a);
    const longest = longestToShortest[0];
    const sumOfTwoLengths = longestToShortest[1] + longestToShortest[2];
    return (sumOfTwoLengths >= longest) ? true : false; 
  }
  isTriangleValid() {
    return (
      this.isLengthGreaterThanZero() && 
      this.isTwoSidesLengthGreaterThanThird()
    ) ? true : false;
  }
  get isEquilateral() {
    return (
      this.isTriangleValid() && 
      this.findUniqueSides.size === 1
    ) ? true : false;
  }
  get isIsosceles() {
    return (
      this.isTriangleValid() && 
      this.findUniqueSides.size <= 2
    ) ? true : false;
  }
  get isScalene() {
    return (
      this.isTriangleValid() && 
      this.findUniqueSides.size === 3
    ) ? true : false;
  }
}
