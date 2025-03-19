const image = document.querySelector("#random-image");
const button = document.querySelector("#change-image");

const changeImage = () => {
    let min = 1;
    let max = 9;
    let rundomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    image.src = `/images/${rundomNumber}.jpg`;
};
changeImage();

button.addEventListener("click", changeImage);
