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
    Employee.prototype.getemployeeId = function () {
        this.employeeId = this.employeeId;
    };
    Employee.prototype.getirsftName = function () {
        this.firstName = this.firstName;
    };
    Employee.prototype.getlastName = function () {
        this.lastName = this.lastName;
    };
    Employee.prototype.getsalary = function () {
        this.salary = this.salary;
    };
    Employee.prototype.getsalesRecorded = function () {
        this.salesRecorded = this.salesRecorded;
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
