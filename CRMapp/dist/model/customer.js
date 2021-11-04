"use strict";
/**
 * customer.ts
 * @author Abdulhamid
 *
 */
class Customer {
    constructor(customerId, firstName, lastName, premiumClass) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.premiumClass = premiumClass;
    }
    // Getter & Setter
    getCustomerId() {
        return this.customerId;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getPremiumClass() {
        return this.premiumClass;
    }
    toString() {
        return `{Customer ID: ${this.customerId} First Name: ${this.firstName} 
                LastName : ${this.lastName} PremiumClass: ${this.premiumClass} }`;
    }
}
module.exports = Customer;
