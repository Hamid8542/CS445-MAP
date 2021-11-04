/**
 * hrmappservices.ts
 * 
 */
//Find an employee by Id
export {};
const employees: Employee[] = require("../datasource/hrmdata");
class HRMAppService {

    public static async getEmployeeById(employeeId: number) {
        for (let emp of employees) {
            if (emp.getEmployeeId() === employeeId) {
                return emp;
            } 
        }
        throw new Error("Employee not found");
    }
}

module.exports = HRMAppService;