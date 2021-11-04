"use strict";
/**
 * main.ts
 * @author Abdulhamid
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customers = require("./datasource/crmdata");
const customerService = require("./service/customerservice");
const Customer = require("./model/customer");
customers.forEach(cust => {
    console.log(cust.toString());
});
const findCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    let customer = yield customerService.getCustomerById(customerId);
    console.log(customer.toString());
});
findCustomer(1001).catch(error => {
    console.log(error.message);
});
