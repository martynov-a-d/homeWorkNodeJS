//---- Формат Д М Г ----//
//---- Формат Ч М С ----//

//---- Объявление переменных ----//
const moment = require("moment");
const { clearInterval } = require("timers");
const args = process.argv.slice(2);
const time = moment().format("h:mm:ss").split(":")
const hours = time[0]
const minutes = time[1]
const seconds = time[2]
const createTimer = (time) => {new Timer(time)}

// console.log(moment().format());
// console.log(moment().format("YYYY, MMMM, DDDD").split("-")); // Год месяц день
// console.log(moment().format("h:mm:ss").split(":")); // Часы минуты секунды
console.log(time);
// console.log(hours, minutes, seconds);

//---- Основная логика ----//
class Timer{
    constructor(elem){
        this.elem = elem;
        this.newTimer()
    }
    newTimer = () => {setInterval(() => {
        if(this.elem > 0) {
            this.elem--
            console.log(this.elem);
        } else {
            clearInterval(this.newTimer)
        }
        }, 1000);
    }
}

time.forEach((elem) => {createTimer(elem)})

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