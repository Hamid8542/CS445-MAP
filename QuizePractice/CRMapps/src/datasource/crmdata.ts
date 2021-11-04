/**
 * crmdata.ts
 * @author Abdulhamid
 */
 export {};
const Customer = require("./datasource/customer");
 
const customers = [
    new Customer(10001, "Anna", "Smith", true),
    new Customer(10002, "Bernardt", "KLanger", false),
    new Customer(10003, "Charles", "Hennesy", true)

];

module.exports = customers;