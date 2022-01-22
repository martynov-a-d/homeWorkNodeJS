//---- Формат Д М Г ----//
//---- Формат Ч М С ----//

//---- Объявление переменных ----//
const moment = require("moment");
const { clearInterval } = require("timers");
const args = process.argv.slice(2);
const time = moment().format("h:mm:ss").split(":")
const hours = {param: time[0], type: "hours"}
const minutes = {param: time[1], type: "minutes"}
const seconds = {param: time[2], type: "seconds"}
const createTimer = (time) => {new Timer(time)}
const EventEmitter = require("events")
let arrayData = []

// console.log(moment().format());
// console.log(moment().format("YYYY, MMMM, DDDD").split("-")); // Год месяц день
// console.log(moment().format("h:mm:ss").split(":")); // Часы минуты секунды
// console.log(time);
// console.log(hours, minutes, seconds);

//---- Основная логика ----//
arrayData.push(hours, minutes, seconds)

class Timer{
    constructor(elem){
        this.elem = elem.param;
        this.type = elem.type;
        this.switchHandler(this.type);
    }
    switchHandler(key) {
        switch (key) {
            case "hours":      
                this.newTimer(this.elem, this.type);
                break;

            case "minutes":
                this.newTimer(this.elem, this.type); 
                break;

            case "seconds":
                this.newTimer(this.elem, this.type);
                break;

            default:
                break;
        }
    }
    newTimer = () => {setInterval(() => {
        if(this.elem > 0) {
            this.elem--
            console.log(this.elem, this.type);
        } else {
            clearInterval(this.newTimer)
        }
        }, 1000);
    }
}

class NewEmitter extends EventEmitter {}

const emitter = new NewEmitter

emitter.on("create", (elem) => createTimer(elem))

arrayData.forEach((elem) => {
    emitter.emit("create", elem)
})