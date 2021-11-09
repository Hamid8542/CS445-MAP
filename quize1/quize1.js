/**
 * quize1.ts
 * @author Abdulhamid Ibrahim
 *
 */
var Employee = /** @class */ (function () {
    function Employee(employeeId, firstName, lastName, salary, salesRecorded) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.salesRecorded = salesRecorded;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    Employee.prototype.setEmployeeId = function (employeeId) {
        this.employeeId = employeeId;
    };
    Employee.prototype.getFirsftName = function () {
        return this.firstName;
    };
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
        ;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.getsalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getSalesRecorded = function () {
        return this.salesRecorded;
    };
    Employee.prototype.setSalesRecorded = function (salesRecorded) {
        this.salesRecorded = salesRecorded;
    };
    Employee.prototype.toString = function () {
        return "{ Employee ID: " + this.employeeId + " First Name: " + this.firstName + "  Last Name: " + this.lastName + " Salary: $" + this.salary.toFixed(2) + " }";
    };
    Employee.prototype.getTotalSalesRecorded = function () {
        var total = 0;
        for (var _i = 0, _a = this.salesRecorded; _i < _a.length; _i++) {
            var sales = _a[_i];
            total += sales;
        }
        return total;
    };
    return Employee;
}());
var emp = new Employee("000-01-101", "Anna", "Smith", 25500.50, [15, 10, 13]);
console.log(emp.toString());
console.log(emp.getTotalSalesRecorded());
// Output:
// { Employee ID: 000-01-101 First Name: Anna  Last Name: Smith Salary: $25500.50 }
// 38
