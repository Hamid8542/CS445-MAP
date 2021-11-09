/**
 * customer.ts
 * @author Abdulhamid Ibrahim
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
    public setCustomerId(customerId: number): void {
        this.customerId = customerId;
     }

    public getFirstName(): string {
        return this.firstName;
     }
     public setFirstName(firstName: string): void{
         this.firstName = firstName;
     }

    public getLastName(): string {
        return this.lastName;
     }
     
     public setLasttName(lastName: string): void{
        this.firstName = lastName;
    }
    public getPremiumClass(): boolean {
        return this.premiumClass;
     }
     public setPremiumClass(premiumClass: boolean): void{
         this.premiumClass = premiumClass;
     }


    public toString(): string {

        return `{Customer ID: ${this.customerId} First Name: ${this.firstName} LastName : ${this.lastName} PremiumClass: ${this.premiumClass() === true ? "Tes" : "No"} }`;

    }

}

module.exports = Customer
