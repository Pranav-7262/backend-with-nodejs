import { add, subtract, multiply, divide } from "./math.js";
import { myName as Pranav } from "./math.js"; //default import with alias
const a = 100;
const b = 50;
console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${subtract(a, b)}`);

console.log(`Multiplication: ${multiply(a, b)}`);
console.log(`Division: ${divide(a, b)}`);

console.log(`My name is: ${Pranav}`);
// This is the main application file that imports the math functions and uses them.
// This file is in ES module format, not in CommonJS format.
