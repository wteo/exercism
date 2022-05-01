//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function hey (message) {
  
    const trimmed = message.trim();
    const silent = !message.trim();
    const question = trimmed.endsWith("?");
    const yell = !/[a-z]/g.test(trimmed) && /[A-Z]/g.test(trimmed);
    
    if (silent) {return "Fine. Be that way!"};
    if (question && yell) {return "Calm down, I know what I'm doing!"};
    if (question) {return "Sure."};
    if (yell) {return "Whoa, chill out!"};
    return "Whatever.";
    

};

