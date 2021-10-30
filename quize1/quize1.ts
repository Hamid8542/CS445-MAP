/**
 * quize1.ts
 * @author Abdulhamid Ibrahim
 * 
 */

class Employee {

   private employeeId: String;
   private firstName: String;
   private lastName: String;
   private salary: number;
   private salesRecorded: Array<number>;
    
    constructor(employeeId: String, firstName: String, lastName: String, salary: number, salesRecorded: Array<number>) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.salesRecorded = salesRecorded;

    }
    getemployeeId() {
        this.employeeId = this.employeeId;
    }
    getirsftName() {
        this.firstName = this.firstName;
    }
    getlastName() {
        this.lastName = this.lastName;
    }
    getsalary() {
        this.salary = this.salary;
    }
    getsalesRecorded() {
        this.salesRecorded = this.salesRecorded;
    }

    public toString(): string {

        return `{ Employee ID: ${this.employeeId} First Name: ${this.firstName}  Last Name: ${this.lastName} Salary: $${this.salary.toFixed(2)} }`;
        
    }
   
    public getTotalSalesRecorded(): number {
        let total = 0;
        for (let sales of this.salesRecorded) {
            total += sales;
        }
        return total;
    }

}
const emp = new Employee("000-01-101", "Anna", "Smith", 25500.50, [15, 10, 13]);

console.log(emp.toString());
console.log(emp.getTotalSalesRecorded());
   


