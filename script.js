const slider = document.querySelector(".header");
const aTag = document.querySelector("a");
const Swiper = document.querySelector(".textSweater")

const changPhoto = () => {
 if (slider.classList.contains("header")) {
 slider.classList.remove("header");
 slider.classList.add("headerTwo");
 console.log("headerTwo");
 } else {
 slider.classList.add("header");
 slider.classList.remove("headerTwo");
 console.log("headerOne");
 };
};


 setInterval(changPhoto, 2000);