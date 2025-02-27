let number = +prompt("write a number");

for (let i = 1; i <= 100; i++) {
    if (i ** 2 > number) break;
    console.log(i);
}
