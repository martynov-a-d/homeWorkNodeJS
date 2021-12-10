//---- Мне кажется, я не понял что именно нужно сделать, пойму, переделаю ----//
let colors = require("colors/safe");
let numbers = [];
/**
 * 
 * @param {*} elem Рандомное число
 */
let makeNum = (elem) => {
    if (elem > 0) {
        for(let i = 0; i < elem; i++) {
            numbers.push(randomNum())
            checkHandler(i, numbers)
        }
    } else {
        console.log(colors.red("Пустой массив"));
    }
};
makeNum(randomNum());
function randomNum () {
    return Math.floor(Math.random() * 10);
};
/**
 * 
 * @param {*} elem Элемент массива чисел
 * @param {*} numbers Массив чисел
 */
function checkHandler (elem, numbers) {
    let key = `numbers[${elem}]`;
    switch (key) {
        case `numbers[${0}]`:
            console.log(colors.green(numbers[0]));
            break;
        case `numbers[${1}]`:
            console.log(colors.yellow(numbers[1]));
            break;
        case `numbers[${2}]`:
            console.log(colors.red(numbers[2]));
            break;         

        default:
            console.log(colors.blue(numbers[elem]));
            break;
    }
};