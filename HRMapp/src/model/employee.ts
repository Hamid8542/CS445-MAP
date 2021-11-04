/**
 * employee.ts
 * @author Abdulhamid
 */

class Employee {
    private employeeId: number;
    private firstName: string;
    private lastName: string;
    private salary: number;
    private salesRecorded: number[]; // or we can use Array<number>

    constructor(employeeId: number, firstName: string, lastName: string, salary: number, salesRecorded: []) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.salesRecorded = salesRecorded;
    }
    
    public getEmployeeId() {
        return this.employeeId;
    }
    public getFirstName() {
        return this.firstName;
    }

    public toString(): string {
        return `{ Employee Id: ${this.employeeId} Employee First Name : ${this.firstName} Employee Last Name : ${this.lastName} Employee Salary : ${this.salary} Employee Sales Recordsd : ${this.salesRecorded}}`
    }

    public getTotalSalesRecorded(): number {
        return this.salesRecorded.reduce((n, m) => (n + m));
    }

}
module.exports = Employee;