let colors = require("colors/safe");
const randomNum = Math.floor(Math.random() * 10);
let numbers = [];
/**
 * 
 * @param {*} elem Рандомное число
 */
let makeNum = (elem) => {
    for(let i = 0; i < elem; i++) {
        let randomNum = Math.floor(Math.random() * 10)
        numbers.push(randomNum)
        checkHandler(i, numbers)
    }
};

makeNum(randomNum);
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