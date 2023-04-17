const n = 4;
const arr = [];

for (let row = 0; row < n; row++) {
  arr[row] = Array.from({ length: n });
}

for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    arr[row][col] = row + 1 + col * n;
  }
}

console.log(arr);
