
const args = process.argv.slice(2);
const min = +args[0];
const max = +args[1];
let colors = require("colors/safe");
/**
 * 
 * @param {*} num Число для проверки на простоеЧисло
 */
function simpleNum(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return num > 1
};
/**
 * 
 * @param {*} min Минимальное число
 * @param {*} max Максимальное число
 * @returns Массив простыхЧисел
 */
function forceNum(min, max) {
    let arraySympleNum = []
    for(let i = min; i <= max; i++) {
        if(simpleNum(i)) {
            arraySympleNum.push(i)
        }
    }
    return arraySympleNum
}
checkHandler(forceNum(min, max));
/**
 * 
 * @param {*} elem Массив простыхЧисел
 */
function checkHandler (elem) {
    //---- Проверка на наличие в массиве елементов ----//
    if(elem.length > 0) {
        elem.forEach((item, key) => {
            switch (key) {
                case 0:
                    console.log(colors.green(item));
                    break;
                case 1:
                    console.log(colors.yellow(item));
                    break;
                case 2:
                    console.log(colors.red(item));
                    break;         
        
                default:
                    console.log(colors.blue(item));
                    break;
            }
        })
    } else {
        console.warn(colors.red("FAIL"));
    }
};