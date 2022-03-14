/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (remainingTime) {
  if (remainingTime === 0) {
    return `Lasagna is done.`;
  } else if (remainingTime > 0) {
    return `Not done, please wait.`;
  } else {
    return `You forgot to set the timer.`;
  } 
}


export function preparationTime (layers, averageTimePerLayer = 2) {
  return layers.length*averageTimePerLayer;
}


export function quantities (layers) {
    const noodlesArr = layers.filter((array) => array === `noodles`);
    const sauceArr = layers.filter((array) => array === `sauce`);
    return {noodles : noodlesArr.length*50, 
            sauce   : sauceArr.length*0.2};
  }


export function addSecretIngredient (friendsList, myList) {
    const secretRecipe = friendsList[friendsList.length - 1];
    myList.push(secretRecipe);
    return; 
  }


export function scaleRecipe (recipe, portions) {
    const copyRecipe = {...recipe};
    for (let ingredient in copyRecipe) {
         copyRecipe[ingredient] *= 0.5* portions;
    }
    return copyRecipe;
    }
  

