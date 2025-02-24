let numberFromUser = +prompt("Write a number");
let arrayNumbers = numberFromUser
    .toString()
    .split("")
    .map((el) => +el);

if (
    arrayNumbers[0] === arrayNumbers[1] &&
    arrayNumbers[1] === arrayNumbers[2]
) {
    console.log("All numbers the same");
} else if (
    arrayNumbers[0] === arrayNumbers[1] ||
    arrayNumbers[0] === arrayNumbers[2] ||
    arrayNumbers[1] === arrayNumbers[2]
) {
    console.log("Some numbers the same");
} else {
    console.log("All numbers different");
}