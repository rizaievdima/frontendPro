function makeSum() {
    let sum = 0;
    return function (num) {
        return (sum += num);
    };
}

let sum = makeSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
