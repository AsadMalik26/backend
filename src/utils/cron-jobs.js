var cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('running a task every minute main');
});

cron.schedule('*/5 * * * * *', () => {
  console.log('running a task every 5 second main');
});
// ever second 1 to 10
// cron.schedule('*/1-10 * * * * *', () => {
//   console.log('running a task every 1-10 second main');
// });

cron.schedule('* * * January,September Thursday', () => {
  console.log('running on Thursadys of January and September');
});

console.log(cron.validate("*/1 * * * *"))

// coding: */sec min hour day-of-month month day-of-week 
module.exports = {cron}