
export const countWords = (sentence) => {
  const replaced = sentence.toLowerCase().replace(/[@.,\/#!$%\^&\*;:{}=\-_`~() |\n|]/g, " ").trim();
  const replaced2 = replaced.replace(/'(\w+)'/g, '$1').trim();
  const array = replaced2.split(/\s+/g);
  
  const wordCount = {};
  let num;
  for (let a of array) {
    const filtered = array.filter((word) => {
        return word === a && String;
      });
    num = filtered.length;
    wordCount[a] = num;
  }
  return wordCount;
};
