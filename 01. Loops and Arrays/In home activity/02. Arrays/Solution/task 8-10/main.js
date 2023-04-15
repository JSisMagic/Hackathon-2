// Helper array for the letters
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const rows = 4;
const cols = 4;

const matrix = [];

// Fill the matrix
for (let row = 0; row < rows; row++) {
  matrix[row] = [];
  for (let col = 0; col < cols; col++) {
    matrix[row][col] = letters.shift();
  }
}
console.log(matrix);

// Main diagonal Start from 0, 0 
let row = 0;
let col = 0;

const mainDiagonal = [];
for (let i = 0; i < cols; i++) {
  mainDiagonal.push(matrix[row][col]);
  row++;
  col++;
}

// Secondary diagonal Start from 0, 4
row = 0;
col = cols - 1;
const secondaryDiagonal = [];
for (let i = 0; i < cols; i++) {
  secondaryDiagonal.push(matrix[row][col]);
  row++;
  col--;
}

console.log(mainDiagonal);
console.log(secondaryDiagonal);

