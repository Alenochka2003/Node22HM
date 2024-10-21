"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("../src/utils/stringUtils");
console.log((0, stringUtils_1.capitalize)('hello world')); // Hello world
console.log((0, stringUtils_1.reverseString)('hello world')); // dlrow olleh
const finance_1 = require("../src/finance/finance");
const loanPayment = finance_1.Finance.LoanCalculator.calculateLoanPayment(100000, 5, 36);
const taxAmount = finance_1.Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Ежемесячный платеж по кредиту: ${loanPayment}`);
console.log(`Налог на доход: ${taxAmount}`);
const userManagement_1 = require("../src/user/userManagement");
const admin = new userManagement_1.UserManagement.Admin.AdminUser('John Doe', 'john@example.com', false);
admin.changeAccessLevel(true);
console.log(`Admin is super admin: ${admin.isSuperAdmin}`);
