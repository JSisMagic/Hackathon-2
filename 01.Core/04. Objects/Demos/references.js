// modify object reference
const theDarkTower = { title: 'The Dark Tower', author: 'Steven King' };
const theStand = theDarkTower;
theStand.title = 'The Stand';
console.log(`[The Dark Tower]: ${theDarkTower.title} by ${theDarkTower.author}.`);
console.log(`[The Stand]: ${theStand.title} by ${theDarkTower.author}.`);

// add new property after the assignment (line 3: const theStand = theDarkTower)
theDarkTower.pages = 300;
console.log(`[The Stand]: ${theStand.pages} pages.`);

console.log();

// modify array reference
const frontendCourses = ['JavaScript', 'CSS'];
const fullstackCourses = frontendCourses;
fullstackCourses.push('C#');
console.log(`[Frontend courses]: ${frontendCourses}`);
console.log(`[Fullstack courses]: ${fullstackCourses}`);

console.log();

// modify reference in function
const addCourse = (courses, course) => {
  courses.push(course);

  return courses;
};

const backendCourses = ['C#', 'SQL'];
const fullstackCourses2 = addCourse(backendCourses, 'JavaScript');
console.log(`[Backend courses]: ${backendCourses}`);
console.log(`[Fullstack courses]: ${fullstackCourses2}`);