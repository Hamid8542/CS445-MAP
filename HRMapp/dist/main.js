"use strict";
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
const employees = require("./datasource/hrmdata");
const HRMAppService = require("./service/hrmappservices");
const Employee = require("./model/employee");
employees.forEach(emp => {
    console.log(emp.toString());
});
const findEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let emp = yield HRMAppService.getEmployeeById(id);
    console.log(emp.toString());
});
findEmployee(1001).catch(error => {
    console.log(error.message);
});
