const linksContainer = document.querySelector(".links");
const writeLink = document.querySelector("#write-link");
const goLink = document.querySelector("#go-link");

let url = "";

linksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("write-link")) {
        url = prompt("Enter the URL").trim();
    }

    if (event.target.classList.contains("go-link")) {
        if (url) {
            window.location.assign(url);
        } else {
            console.log("Write correct URL");
        }
    }
});
