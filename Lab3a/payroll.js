/**
 * payroll.ts
 * @author Abdulhamid
 */
var Payroll;
(function (Payroll) {
    Payroll[Payroll["FICA"] = 0] = "FICA";
    Payroll[Payroll["STATE"] = 1] = "STATE";
    Payroll[Payroll["MEDICARE"] = 2] = "MEDICARE";
})(Payroll || (Payroll = {}));
;
var tax = Payroll.FICA;
console.log(tax);
var PayrollCode;
(function (PayrollCode) {
    PayrollCode[PayrollCode["FICA"] = 10] = "FICA";
    PayrollCode[PayrollCode["STATE"] = 5] = "STATE";
    PayrollCode[PayrollCode["MEDICARE"] = 12] = "MEDICARE";
})(PayrollCode || (PayrollCode = {}));
var tax2 = PayrollCode.FICA;
console.log(tax2);
