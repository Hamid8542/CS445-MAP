"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee = require("../model/employee");
const employees = [
    new Employee(101, "Hailu", "Benti", 25000, [20, 15, 13]),
    new Employee(102, "Selam", "Kidane", 23000, [22, 17, 15]),
    new Employee(103, "Taye", "Manaye", 24000, [26, 13, 18])
];
module.exports = employees;
