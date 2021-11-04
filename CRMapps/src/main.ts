/**
 * main.ts
 * @author Abdulhamid Ibrahim
 */

export { };
const customers: Customer[] = require("./datasource/crmdata");
const customerService = require("./service/customerservice");
const Customer = require("./model/customer");

 customers.forEach(cust => {
     console.log(cust.toString());
 });
 
 const findCustomer = async (customerId: number) => {
     let customer = await customerService.getCustomerById(customerId);
     console.log(customer.toString());
 }
 
 
 findCustomer(10001).catch(error => {
     console.log(error.message);
 });

 findCustomer(100011).catch(error => {
    console.log(error.message);
});
 