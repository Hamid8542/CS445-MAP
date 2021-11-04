/**
 * customerservice.ts
 * @author Abdulhamid
 * 
 */
 export {};
const customers: Customer[] = require("../CRMapps/datasource/crmdata");
 
class CustomerService {
 
    public static async getCustomerById(customerId: number) {
        for (let cust of customers) {
            if (cust.getCustomerId() === customerId) {
                return cust;
            } 
        }
        throw new Error("Customer not found");
    }

}

module.exports = CustomerService;