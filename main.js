let number = parseInt(prompt("write a number"));
let numberType = "the number is simple";

if (isNaN(number) || number <= 1) {
    numberType = "the number is not simple";
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            numberType = "the number is not simple";
            break;
        }
    }
}

console.log(numberType);
