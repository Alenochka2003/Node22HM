import { capitalize, reverseString } from '../src/utils/stringUtils';

console.log(capitalize('hello world')); // Hello world
console.log(reverseString('hello world')); // dlrow olleh


import { Finance } from '../src/finance/finance';

const loanPayment = Finance.LoanCalculator.calculateLoanPayment(100000, 5, 36);
const taxAmount = Finance.TaxCalculator.calculateTax(50000, 20);

console.log(`Ежемесячный платеж по кредиту: ${loanPayment}`);
console.log(`Налог на доход: ${taxAmount}`);


import { UserManagement } from '../src/user/userManagement';

const admin = new UserManagement.Admin.AdminUser('John Doe', 'john@example.com', false);
admin.changeAccessLevel(true);
console.log(`Admin is super admin: ${admin.isSuperAdmin}`);

