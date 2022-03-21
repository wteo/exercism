//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function recite (initialBottleCount, takeDownCount) {
    
    let bottlesLeft = initialBottleCount - takeDownCount;

    const song = [];
    for (let i = initialBottleCount; i > bottlesLeft; i--) {
        if (i > 1) {
            const firstVerse = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
            const secondVerse = `Take one down and pass it around, ${(i > 2) ? (i - 1) + " bottles" : (i - 1) + " bottle"} of beer on the wall.`;
            song.push(firstVerse, secondVerse, "");
        } else if (i === 1) {
            const firstVerse = `${i} bottle of beer on the wall, ${i} bottle of beer.`;
            const secondVerse = `Take it down and pass it around, no more bottles of beer on the wall.`;
            song.push(firstVerse, secondVerse, "");
        } else {
            const firstVerse = `No more bottles of beer on the wall, no more bottles of beer.`;
            const secondVerse = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
            song.push(firstVerse, secondVerse, "");
      }
    }
    song.pop();
    return song;
}
