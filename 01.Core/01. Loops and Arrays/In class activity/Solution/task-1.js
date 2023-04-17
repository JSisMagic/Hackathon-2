const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7];

arr.sort();

console.log(arr);

// How to sort by preserving the order
arr.sort(function(a, b) {
  return a - b;
});

console.log(arr);
