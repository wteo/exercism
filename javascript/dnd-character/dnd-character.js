//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function abilityModifier(num) {
  if (num < 3) throw new Error("Ability scores must be at least 3");
  if (num > 18) throw new Error("Ability scores can be at most 18");
  return Math.floor((num - 10) / 2);
}
export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
    
  }
  
  static rollAbility() {
    let numberOfDices = 4;
    let results = [];
    for (let i = 0; i < numberOfDices; i++) {
        results.push(Math.floor(Math.random()*6 + 1));
    }
    const descendingNum = results.sort((a,b) => b-a);
    return descendingNum[0] + descendingNum[1] + descendingNum[2];
  }
}