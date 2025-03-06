function multiplyNumbers(a) {
    return function (b) {
        return a * b;
    };
}

console.log(multiplyNumbers(5)(2));
