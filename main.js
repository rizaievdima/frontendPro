const button = document.querySelector("#my-button");
const text = document.querySelector(".my-text");

button.addEventListener("click", () => {
    text.classList.toggle("color-green");
});
