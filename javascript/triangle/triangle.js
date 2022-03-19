//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
    this.isLengthGreaterThanZero();
    this.isTwoSidesLengthGreaterThanThird();
    this.isTriangleValid();
  }
  isLengthGreaterThanZero() {
    const {side1, side2, side3} = this;
    return (
      side1 > 0 && 
      side2 > 0 && 
      side3 > 0 
    ) ? true : false;
  }
  isTwoSidesLengthGreaterThanThird() {
    const {side1, side2, side3} = this;
    const sideLengths = [side1, side2, side3];
    const longestToShortest = sideLengths.sort((a, b) => b - a);
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
    const {side1, side2, side3} = this;
    return (
      this.isTriangleValid() && (
        side1 === side2 &&
        side2 === side3 && 
        side1 === side3
        )
    ) ? true : false;
  }
  get isIsosceles() {
    const {side1, side2, side3} = this;
    return (
      this.isTriangleValid() && (
        side1 === side2 ||
        side2 === side3 || 
        side1 === side3
        )
    ) ? true : false;
  }
  get isScalene() {
    const {side1, side2, side3} = this;
    return (
      this.isTriangleValid() && (
        side1 !== side2 &&
        side1 !== side3 &&
        side2 !== side3
      )
    ) ? true : false;
    
  }
}
