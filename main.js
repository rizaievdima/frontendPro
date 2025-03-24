const linksContainer = document.querySelector(".links");
const writeLink = document.querySelector("#write-link");
const goLink = document.querySelector("#go-link");

let url = "";

linksContainer.addEventListener("click", (event) => {
    if (event.target.id === "write-link") {
        const newUrl = prompt("Enter URL");
        if (newUrl) {
            url = newUrl.trim();
        }
    }

    if (event.target.id === "go-link") {
        if (url) {
            window.location.assign(url);
        } else {
            console.log("First write a URL");
        }
    }
});
