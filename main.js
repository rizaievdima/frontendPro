const sliderContent = document.querySelector(".slider-content");
const sliderDotsContainer = document.querySelector(".slider-dots");

const navPrev = document.querySelector(".nav-prev");
const navNext = document.querySelector(".nav-next");

const slidesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
let currentIndex = 0;

sliderContent.innerHTML = slidesArray
    .map((slide, index) => {
        return `<img class="slider-item ${index === 0 ? "active" : ""}" src="/images/${slide}" alt="" />`;
    })
    .join("");

sliderDotsContainer.innerHTML = slidesArray
    .map((_, index) => {
        return `<span class="dot ${index === 0 ? "active" : ""}" data-index="${index}"></span>`;
    })
    .join("");

const sliderItems = document.querySelectorAll(".slider-item");
const sliderDots = document.querySelectorAll(".dot");

function changeSlide(index) {
    sliderItems.forEach((item) => {
        item.classList.remove("active");
    });
    sliderDots.forEach((dot) => {
        dot.classList.remove("active");
    });
    sliderItems[index].classList.add("active");
    sliderDots[index].classList.add("active");
}
function updateNavButtons() {
    navPrev.classList.toggle("disabled", currentIndex === 0);
    navNext.classList.toggle("disabled", currentIndex === sliderItems.length - 1);
}

navPrev.addEventListener("click", (e) => {
    if (currentIndex > 0) {
        currentIndex--;
        changeSlide(currentIndex);
        updateNavButtons();
    }
});

navNext.addEventListener("click", (e) => {
    if (currentIndex < sliderItems.length - 1) {
        currentIndex++;
        changeSlide(currentIndex);
        updateNavButtons();
    }
});
sliderDotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
        currentIndex = +e.target.dataset.index;
        changeSlide(currentIndex);
        updateNavButtons();
    }
});
