const user = {
  username: 'john.doe.123',
  password: 'very_secure'
};

const assignPropertiesToVariables1 = (user) => {
  const username = user.username;
  const password = user.password;
  console.log(username, password);
};

const assignPropertiesToVariables2 = (user) => {
  // 'destructuring' user
  const { username, password } = user;
  console.log(username, password);
};

// destructuring in argument list
const assignPropertiesToVariables3 = ({ username, password }) => console.log(username, password);

const createCopy1 = (user) => {
  const newUser = {};
  newUser.username = user.username;
  newUser.password = user.password;

  return newUser;
};

const createCopy2 = (user) => {
  // 'expand (...)' all key-value pairs in a new object
  return { ...user };
};

const createCopy3 = (user) => ({ ...user });
