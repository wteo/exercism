// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, cardType) {
    const newStack = stack.filter(function(num) {
        return num === cardType;
    })
    return newStack.length;
  }

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
    const evenCards = stack.filter(function(num) {
      return num % 2 === 0;
    })
    const oddCards = stack.filter(function(num) {
      return num % 2 !== 0;
    })
    return type === true ? evenCards.length : oddCards.length 
  }