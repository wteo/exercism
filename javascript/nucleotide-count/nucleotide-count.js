//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
    const array = strand.split("");
    const check = array.every((char) => char.match(/[ACGT]/g));
    if (check === false) throw new Error("Invalid nucleotide in strand");
    const countAs = array.filter((char) => char === "A");
    const countCs = array.filter((char) => char === "C");
    const countGs = array.filter((char) => char === "G");
    const countTs = array.filter((char) => char === "T");
    return `${countAs.length} ${countCs.length} ${countGs.length} ${countTs.length}`;
}