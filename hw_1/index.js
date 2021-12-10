let colors = require("colors/safe")
const elem = Math.floor(Math.random() * 10)
let numbers = []
let makeNum = (elem) => {
    
    for(let i = 0; i < elem; i++) {
        let randomNum = Math.floor(Math.random() * 10)
        numbers.push(randomNum)
        test(numbers[i], numbers)
    }
}

makeNum(elem)

function test (key, numbers) {
    const firstNum = numbers[0];
    const secondNum = numbers[1];
    const therdNum = numbers[2];
    switch (key) {
        case firstNum:
            console.log(colors.green(firstNum));
            break;
        case secondNum:
            console.log(colors.yellow(secondNum));
            break;
        case therdNum:
            console.log(colors.red(therdNum));
            break;

        default:
            console.log("----");
            break;
    }
}