/**
 * payroll.ts
 * @author Abdulhamid
 */

 enum Payroll {
    FICA,
    STATE,
    MEDICARE,
};

let tax: Payroll = Payroll.FICA;
console.log(tax);

enum PayrollCode {
    FICA = 10,
    STATE = 5,
    MEDICARE = 12,
}

let tax2: PayrollCode = PayrollCode.FICA;
console.log(tax2);