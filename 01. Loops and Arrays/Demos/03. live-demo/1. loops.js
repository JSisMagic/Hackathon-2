let i = 1;

while(i <= 10) {
  console.log(i);

  i++;
}


for (let i = 1; i <= 10; i++) {
  console.log(i);

  if (i === 5) {
    break;
  }

  console.log(i + ' is a happy number');
}

const array = [1, 2, 3, 4, 5];

array[0] = 1
array[1] = 2

// for iterable value

for (let number of array) {
  console.log(number);
}

// for in -> enumerable

const object = {
  age: 20,
  name: 'Ivan',
};



for (let key in object) {
  console.log(key);
}

// do-while: do-not-use