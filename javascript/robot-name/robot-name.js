// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const releasedNames = new Set();

function randomization(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  }

function nameGenerator() {
  const alphabets = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const numbers = [..."1234567890"];
  const pickedAlphabet1 = randomization(alphabets);
  const pickedAlphabet2 = randomization(alphabets);
  const pickedNum1 = randomization(numbers);
  const pickedNum2 = randomization(numbers);
  const pickedNum3 = randomization(numbers);
  const name = pickedAlphabet1 + pickedAlphabet2 + pickedNum1 + pickedNum2 + pickedNum3;
  if (releasedNames.has(name)) {
    return nameGenerator();
  }
  releasedNames.add(name);
  return name;
  }

const robotSet = new Set();

export class Robot {
  constructor() {
    this.robotSet = nameGenerator();
  }
  get name() {
    return this.robotSet;
  }

  reset() {
    this.robotSet = nameGenerator();
  }
}

Robot.releaseNames = () => {};
