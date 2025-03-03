function removeElement(array, item) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === item) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
}

const array = [1, 3, 4, 6, 2, 4, 5, 7];

removeElement(array, 4);

console.log(array);
