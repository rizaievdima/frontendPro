let startTimer = 75;

function rerenderTimer() {
    const output = document.getElementById("timer");
    const minutes = Math.floor(startTimer / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (startTimer % 60).toString().padStart(2, "0");

    output.textContent = minutes + ":" + seconds;
}

const timer = setInterval(() => {
    startTimer--;
    rerenderTimer();
    if (startTimer <= 0) {
        clearInterval(timer);
    }
}, 1000);

rerenderTimer();
