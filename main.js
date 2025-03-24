const buttonsContainer = document.querySelector(".buttons-container");

buttonsContainer.addEventListener("click", (e) => {
    if (e.target.id === "btn1") {
        console.log("Button 1 clicked");
    } else if (e.target.id === "btn2") {
        console.log("Button 2 clicked");
    } else if (e.target.id === "btn3") {
        console.log("Button 3 clicked");
    }
});
