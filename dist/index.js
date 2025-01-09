"use strict";
function calculateTax(income) {
    return income * 0.2;
}
let user = [1, "Mosh"];
let sales = 123456789;
let numbers = [1, 2, 3];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => { },
};
let a = 100;
let b = "Coffee";
let c = [true, false, false];
let d = { age: 20 };
let e = [3];
let f;
let g = [];
let song = { title: "My song", releaseYear: 2025 };
let prices = [100, 200, 300];
prices[0] = 400;
function myFunc(a, b) {
    return a * b;
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
let users = [
    {
        name: "John Smith",
        age: 30,
        occupation: "Software engineer",
    },
    {
        name: "Kate Müller",
        age: 28,
    },
];
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "kp", 0);
account.deposit(100);
console.log(account);
//# sourceMappingURL=index.js.map