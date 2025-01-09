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
