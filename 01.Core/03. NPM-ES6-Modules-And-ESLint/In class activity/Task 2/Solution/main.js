// import moment module
// import logger module
import moment from 'moment';
import logger from './logger.js';

// do not remove this line. Still, if you want google it :)
moment.suppressDeprecationWarnings = true;

// print current date using moment and logger.info
logger.info(moment());

const dates = ["1995-12-25", "2020W065", "js-cohort", "2020-W06-5"];
// Parses the array and logs success when date is valid or error when invalid using the logger
dates.forEach(date => {
  if (moment(date).isValid()) {
    logger.success(moment(date));
  } else {
    logger.error(moment(date));
  }
});