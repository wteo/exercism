//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(table) {
    this.table = table.split("\n").map(row => row.split(" ").map(num => Number(num)));
  }

  get rows() {
    return this.table;
  }

  get columns() {
    const arrColumns = [];
        for (let i = 0; i < this.table[0].length; i++) {
            arrColumns.push(this.table.map(row => row[i]));
        }
        return arrColumns;
  }
}

