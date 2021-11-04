/**
 * main.ts
 * @author Abdulhamid
 */
 export { };
 const employees: Employee[] = require("./datasource/hrmdata");
 const HRMAppService = require("./service/hrmappservices");
 const Employee = require("./model/employee");

employees.forEach(emp => {
    console.log(emp.toString());
});

const findEmployee = async (id: number) => {
   let emp = await HRMAppService.getEmployeeById(id);
    console.log(emp.toString());

}

findEmployee(1001).catch(error => {
    console.log(error.message);
});
