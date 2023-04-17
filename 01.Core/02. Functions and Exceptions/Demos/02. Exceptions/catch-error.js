const num = 42;

try {
  // split() does not exist on numbers and will throw an exception
  num.split();
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Some work after all...')
}