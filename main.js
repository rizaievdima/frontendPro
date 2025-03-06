function makeSum() {
    let sum = 0;
    return function (num) {
        return (sum += num);
    };
}

let sum = makeSum();

console.log(sum(2));
console.log(sum(2));
console.log(sum(4));
