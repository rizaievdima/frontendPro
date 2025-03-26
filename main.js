const form = document.querySelector("#form");

function showErrorMessage(selectorElement, message) {
    document.querySelector(`#error-${selectorElement}`).textContent = message;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formValues = new FormData(e.target);
    const name = formValues.get("name").trim();
    const message = formValues.get("message").trim();
    const phone = formValues.get("phone").trim();
    const email = formValues.get("email").trim();

    let showError = false;

    if (!name) {
        showErrorMessage("name", "Name is required");
        showError = true;
    } else {
        showErrorMessage("name", "");
    }

    if (!message) {
        showErrorMessage("message", "Message is required");
        showError = true;
    } else if (message.length < 5) {
        showErrorMessage("message", "Message must be at least 5 characters long");
        showError = true;
    } else {
        showErrorMessage("message", "");
    }

    if (!phone) {
        showErrorMessage("phone", "Phone number is required");
        showError = true;
    } else if (!/^\+380\d{9}$/.test(phone)) {
        showErrorMessage(
            "phone",
            "Phone number must start with +380 and contain 9 digits after it"
        );
        showError = true;
    } else {
        showErrorMessage("phone", "");
    }

    if (!email) {
        showErrorMessage("email", "Email is required");
        showError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showErrorMessage("email", "Invalid email format");
        showError = true;
    } else {
        showErrorMessage("email", "");
    }

    if (!showError) {
        console.log("Form is valid");
        console.log("name: ", name);
        console.log("message: ", message);
        console.log("Phone: ", phone);
        console.log("email: ", email);
    }
});
