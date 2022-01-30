//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

    constructor() {
        this.db = {};
    }

    add(name, grade) {
        for (let names of Object.values(this.db)) {
            const index = names.indexOf(name);
            if(index != -1){
                    names.splice(index, 1)
                    break;
                }
        }
        let studentNames = this.db[grade] || [] ;
        studentNames.push(name);
        this.db[grade] = studentNames;
        this.sortNames();
        return this.db;
    }

    roster(){
        return JSON.parse(JSON.stringify(this.db))
    }

    grade(grade) {
        return this.roster()[String(grade)] || [] ;
    }

    sortNames() {
        const sorted = [];
        for (const [key, value] of Object.entries(this.db)) {
            sorted.push(key + value.sort())
        }
        const gradesSorted = sorted.sort();
        const namesSorted = [];
        for (let i = 0; i < gradesSorted.length; i++) {
            namesSorted.push(gradesSorted[i].replace(/[123456789]/g, ""))                
        }
        const namesOnly = namesSorted.filter(function(name) {
            return name !== "";
        })
        return namesOnly.join().split(",")
    }
    
}