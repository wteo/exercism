//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldScoreSystem) => {
  const newScoreSystem = {};
  for (let score in oldScoreSystem) {
    for (let letter of oldScoreSystem[score]) {
      newScoreSystem[letter.toLowerCase()] = Number(score);
    }
  }
  return newScoreSystem;
};
