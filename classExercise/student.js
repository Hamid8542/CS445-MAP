/**
 * student.ts
 * @author Abdulhamid
 */
var Student = /** @class */ (function () {
    function Student(firstName, lastName, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.computeAverage = function () {
        var sum = 0.0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        var averageGrade = sum / this.grades.length;
        return averageGrade;
    };
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    return Student;
}());
var grades = [80.5, 95.0, 100];
var student1 = new Student("John", "Smith", grades);
var avg = student1.computeAverage().toFixed(2);
console.log("The Average grade scored by " + student1.getFirstName() + " " + student1.getLastName() + " is " + avg);
