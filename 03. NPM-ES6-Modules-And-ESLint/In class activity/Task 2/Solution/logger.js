const defaultInfoMsg = 'No info provided!';
const defaultErrorMsg = 'No error provided!';
const defaultSuccessMsg = 'No success message provided!';

const info = (msg) => {
  console.info(`Info: ${msg || defaultInfoMsg}`);
};

const error = (msg) => {
  console.error(`Error: ${msg || defaultErrorMsg}`);
};

const success = (msg) => {
  console.log(`Success: ${msg || defaultSuccessMsg}`);
};


export default {
  info,
  error,
  success,
};
