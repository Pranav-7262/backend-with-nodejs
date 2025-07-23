const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

export { add, subtract, multiply, divide }; //this is the named export syntax
// You can also export them as default if needed, but here we are using named exports.
//it is in ES module format not in CommonJS format
export const myName = "Pranav"; // Example of another named export
