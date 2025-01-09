// function
function calculateTax(income: number): number {
  return income * 0.2;
}

// tuples
let user: [number, string] = [1, "Mosh"];

// annotation
let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3];

// Enums
enum Size {
  Small = 1,
  Medium,
  Large,
}

//objects

type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {},
};

let a = 100;
let b = "Coffee";
let c = [true, false, false];
let d = { age: 20 };
let e = [3];
let f;
let g = [];

let song: {
  title: string;
  releaseYear: number;
} = { title: "My song", releaseYear: 2025 }; //missing release year

let prices = [100, 200, 300];
prices[0] = 400; // string not a number

function myFunc(a: number, b: number): number {
  return a * b;
} // does not return any value

type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// console.log(customer?.birthday?.getFullYear());

type Users = {
  name: string;
  age: number;
  occupation?: string;
};
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

// • Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
  fly: () => void;
};
type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid amount");
    this.balance += amount;
  }
}

let account = new Account(1, "kp", 0);
account.deposit(100);
console.log(account);
