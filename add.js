const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mult = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

const PI = 3.142;

// module.exports.add = add; // Exporting the add function so it can be used in other files
// module.exports.mult = mult; // Exporting the mult function

module.exports = { add, sub, mult, div, PI }; // Exporting multiple functions using object shorthand notation
