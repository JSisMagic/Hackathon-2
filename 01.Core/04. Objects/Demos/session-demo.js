// what are types? what types do we have in js?
// "Now, if you’re a fan of strongly typed (statically typed) languages, you may object to this usage of the word “type.” 
// In those languages, “type” means a whole lot more than it does here in JS.
//...
// A type is an intrinsic, built-in set of characteristics that uniquely identifies the behavior of a particular value 
// and distinguishes it from other values, both to the engine and to the developer.
// ...
// Having a proper understanding of each type and its intrinsic behavior is absolutely essential to understanding how to properly and accurately 
// convert values to different types. Nearly every JS program ever written will need to handle value !coercion! in some shape or form, 
// so it’s important you do so responsibly and with confidence."

// type coercion
let strNum = '2';
console.log(typeof strNum);
strNum++;
console.log(strNum);
console.log(typeof strNum);

// JavaScript defines seven built-in types -  null,undefined, boolean, number, string, object, symbol — added in ES6!
// Object, function & array are reference types, all others are primitive

// primitive types are copied by value
let a = 10;
let b = a;

console.log(a); // 10
console.log(b); // 10
console.log(a == b); // true
console.log(a === b); //true
a = 11;
console.log(a); // 11
console.log(b); // 10
console.log(a == b); // false
console.log(a === b); // false

// null
console.log(typeof null);

// reference types are copied by reference
let arr = [1, 2, 3];
let arr1 = arr;
console.log(arr); // [1,2,3]
console.log(arr1); // [1,2,3]
console.log(arr == arr1); // true
console.log(arr === arr1); // true
arr[1] = 90;
console.log(arr); // [1,90,3]
console.log(arr1); // [1,90,3]
arr1 = [4, 5, 6];
console.log(arr); // [1,90,3]
console.log(arr1); // [4,5,6]
console.log(arr == arr1); // false
console.log(arr === arr1); // false
let arr2 = [4, 5, 6];
console.log(arr1); // [4,5,6]
console.log(arr2); // [4,5,6]
console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

// what we talked about const arr and changing item values?
const arr3 = [1, 2, 3, 4, 5, 6];
arr3[0] = 0;
//arr3 = []; - no!
arr3.push(8);
console.log(arr3);

//pass by value
const square = x => {
  x = x * x;
  return x;
}

let y = 10;
let result = square(y);

console.log(y); // 10 -- no change
console.log(result); // 100 

// pass by reference
const callByReference = (obj, key) => {
  console.log("Inside Call by Reference Method");
  // change prop
  obj[key] = 100;
  console.log(obj);

  // now change the object
  obj = { name: "You", score: 90 };
  console.log(obj);

  //what if we have ref as a prop???
}

let movie = {
  name: "The Matrix",
  score: 50
};

console.log("Before Call by Reference Method");
console.log(movie);
callByReference(movie, 'score')
console.log("After Call by Reference Method");
console.log(movie);


// create object using JSON format
// literal
let person = {
  name: "Nadya",
  age: "34"
};

console.log(person.name);
console.log(person["has-dog"]);
person["has-dog"] = true;
console.log(person["has-dog"]);
console.log(person);

//important object properties
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// let person = {
//   name: "Nadya",
//   age: "34",
//   love: Infinity
// };
// json.stringify converts a JavaScript object or value to a JSON string
let jsonPerson = JSON.stringify(person);
console.log(typeof jsonPerson);
console.log(jsonPerson);


// iterate through props
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    const element = person[key];
    console.log(`${key}: ${element}`);
  }
}

// how else can we check whether a object has prop?
// {key in object} or {object.key !== undefined - be careful with falsy!}
// false, 0, NaN, undefined, ''
//if (person.street !== undefined){}

// syntax sugar to make sure chained properties are not undefined
//if (person.address?.street?.number?.zip){console.log(person.address?.street?.number.zip)

// shallow copy
const student = {
  name: 'Toto',
  age: '12',
  courses: ['Math', 'Literature', 'Chemistry', 'Biology']
}

const student1 = Object.assign({}, student);
console.log(student);
console.log(student1);
student.age = 13;
student.courses.pop();
console.log(student);
console.log(student1);

// how else can we do it? Spread operator
const student2 = { ...student };

// deep copy - use JSON.stringify & JSON.parse
const student3 = JSON.parse(JSON.stringify(student));
student.courses.pop();
console.log(student);
console.log(student3);

// JSON.stringify - look out!
const jsonArr = [1, "nadya", student, function () { return 1; }, Infinity, NaN, null]
console.log(jsonArr);
console.log(JSON.stringify(jsonArr));

// use this
const car = {
  maker: 'Suzuki',
  model: 'SX4',
  engine: 1.6,
  present: function () {
    console.log(`This car is ${this.maker} ${this.model} with impressive ${this.engine} engine`);
  }
}

car.present();

// deep & shadow copy more examples 
console.log(`shallow copy`)

const arr = [1, 2, 3, [4, 5, 6]];
const newArr = [...arr]; // const newArr = arr.slice();
console.log(newArr)

newArr[3][0] = 10;
console.log(arr[3]);

console.log(`deep copy`)

const newArr2 = _.cloneDeep(arr);
console.log(newArr2);

newArr2[3][0] = 15;
console.log(`${arr[3]} original array`);
console.log(`${newArr2[3]} deep copied array`)


// Destructuring allows you to easily access the values of arrays or objects and assign them to variables

// array example
const arr = [1, 2, 3];
const [p, q] = arr;
console.log(p);
console.log(q);
console.log(arr);

// object example

const person = {
  firstName: 'Max',
  age: 28,
  address: "fdsfsg",
  children: 0,
  education: "fdfd"
}

const { firstName, age } = person;
// const firstName  = person.firstName ?? undefined;
console.log(firstName);
console.log(age);
console.log(person);

// very useful when working with function arguments
let printName = personObj => console.log(personObj.firstName);

printName({ firstName: 'Max', age: 28 });

// no  need to pass the object an try to use property - errors may occur
// simply pull out the firstName property and store it in the argument named the same and use it in the function
const person = {
  firstName: 'Max',
  age: 28,
  address: "28 Happy Street, Canada, USA",
  children: 0,
  education: "Philosophy MD"
}
printName = ({ firstName, age, education }) => console.log(firstName, age, education);
printName(person);
