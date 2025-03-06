const maxRepeat = 10;

for (let i = 0; i < maxRepeat; i++) {
    let answer = +prompt("Ведіть число більше 100");

    if (!isNaN(answer) && answer > 100) {
        console.log(answer);
        break;
    }
}
