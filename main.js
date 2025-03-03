function removeCharacters(str, arrayToDelete) {
    let result = str;
    arrayToDelete.forEach((item) => {
        result = result.replaceAll(item, "");
    });
    return result;
}

let newStr = removeCharacters("Hello World! How Are you?", ["e", "l", "?"]);
console.log(newStr);
