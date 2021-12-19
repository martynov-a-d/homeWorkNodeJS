//---- Формат Д М Г ----//
const moment = require("moment");
const { clearInterval } = require("timers");
const args = process.argv.slice(2);
const time = moment().format("h:mm:ss").split(":")
const hours = time[0]
const minutes = time[1]
const seconds = time[2]

// console.log(moment().format());
// console.log(moment().format("YYYY, MMMM, DDDD").split("-")); // Год месяц день
// console.log(moment().format("h:mm:ss").split(":")); // Часы минуты секунды
// console.log(time);
// console.log(hours, minutes, seconds);

/**
 * 
 * @param {*} param Параметр обратного отсчета
 * @returns 
 */
// const newTimer = (param) => {setInterval(() => {
//         if(param > 0) {
//             param--
//             console.log(param);
//         } else {
//             clearInterval(newTimer)
//         }
//     }, 1000);
//     return false
// }

// time.forEach((elem) => {newTimer(elem)})

console.log('Record 1');

setTimeout(() => {
  console.log('Record 2');
  Promise.resolve().then(() => {
    setTimeout(() => {
        console.log('Record 3');
    Promise.resolve().then(() => {
      console.log('Record 4');
      });       
    });
  });       
});

console.log('Record 5');

Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6')));

