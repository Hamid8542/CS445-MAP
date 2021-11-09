/**
 * quize1.ts
 * @author Abdulhamid Ibrahim
 * 
 */

class Employee {

   private employeeId: string;
   private firstName: string;
   private lastName: string;
   private salary: number;
   private salesRecorded: Array<number>;
    
    constructor(employeeId: string, firstName: string, lastName: string, salary: number, salesRecorded: Array<number>) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.salesRecorded = salesRecorded;

    }
    public getEmployeeId(): string{
      return this.employeeId;
    }
    public setEmployeeId(employeeId: string): void {
        this.employeeId = employeeId;
    }

    public getFirsftName(): string {
        return this.firstName ;
    }
    public setFirstName(firstName: string): void{
        this.firstName = firstName;
        ;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public getsalary(): number {
        return this.salary;
    }
    public setSalary(salary: number): void {
        this.salary = salary;
   }
    public getSalesRecorded(): number []{
        return this.salesRecorded;
    }
    public setSalesRecorded(salesRecorded: number []): void{
        this.salesRecorded = salesRecorded;
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

// Output:
// { Employee ID: 000-01-101 First Name: Anna  Last Name: Smith Salary: $25500.50 }
// 38


