const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];
let name = "Gergana";

for (let i = 0; i < people.length; i++) {
  people[i] = people[i]
    .split('')
    .sort()
    .join('');
}

people.sort();

console.log(people);
