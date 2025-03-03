function getAverageNumber(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

let averageNumber = getAverageNumber([3, "3", "test", true, 4, null, 5, NaN]);
console.log(averageNumber);
