"use strict";
/**
 * employee.ts
 * @author Abdulhamid
 */
class Employee {
    constructor(employeeId, firstName, lastName, salary, salesRecorded) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.salesRecorded = salesRecorded;
    }
    getEmployeeId() {
        return this.employeeId;
    }
    getFirstName() {
        return this.firstName;
    }
    toString() {
        return `{ Employee Id: ${this.employeeId} Employee First Name : ${this.firstName} Employee Last Name : ${this.lastName} Employee Salary : ${this.salary} Employee Sales Recordsd : ${this.salesRecorded}}`;
    }
    getTotalSalesRecorded() {
        return this.salesRecorded.reduce((n, m) => (n + m));
    }
}
module.exports = Employee;
