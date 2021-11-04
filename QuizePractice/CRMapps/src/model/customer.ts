/**
 * customer.ts
 * @author Abdulhamid
 * 
 */

 class Customer {
    private customerId: number;
    private firstName: string;
    private lastName: string;
    private premiumClass: boolean;

    constructor(customerId: number, firstName: string, lastName: string, premiumClass: boolean) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.premiumClass = premiumClass;
    }

    // Getter & Setter
    public getCustomerId(): number {
        return this.customerId;
    }
    public getFirstName(): string {
        return this.firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public getPremiumClass(): boolean {
        return this.premiumClass;
    }

    public toString(): string {

        return `{Customer ID: ${this.customerId} First Name: ${this.firstName} 
                LastName : ${this.lastName} PremiumClass: ${this.premiumClass} }`;

    }

}

module.exports = Customer;
