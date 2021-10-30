/**
 * student.ts
 * @author Abdulhamid
 */

class Student {
    private firstName: string;
    private lastName: string;
    private grades: number[]; //private grades: Array<number>;

    constructor(firstName: string, lastName: string, grades: number[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

addGrade(grade: number): void {
    this.grades.push(grade);
    }

computeAverage(): number {
    let sum: number = 0.0;
    for (let i = 0; i < this.grades.length; i++){
        sum += this.grades[i];
    }
    const averageGrade: number = sum / this.grades.length;
    return averageGrade;
    }
// Getter
getFirstName(): string {
    return this.firstName;

}
getLastName(): string {
    return this.lastName;
    }
    
    

    
}

const grades = [80.5, 95.0,  100];
const student1 = new Student("John", "Smith", grades);
const avg = student1.computeAverage().toFixed(2);
console.log(`The Average grade scored by ${student1.getFirstName()} ${student1.getLastName()} is ${avg}`);