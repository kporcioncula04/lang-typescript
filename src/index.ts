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
let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {},
};
