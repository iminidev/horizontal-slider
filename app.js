const images = document.querySelectorAll(".element");
const windowWidth = window.innerWidth;
const elementWrapper = document.querySelector(".element-wrapper");
const horizontalSection = document.querySelector(".horizontal-section");

const horizontalLength = elementWrapper.scrollWidth;
const distFromTop = horizontalSection.offsetTop;

const scrollDistance = distFromTop + horizontalLength - windowWidth;

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(./images/${idx+1}.jpg)`;
});

horizontalSection.style.height = horizontalLength + "px";

window.onscroll = function() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        elementWrapper.style.transform = `translateX(-${scrollTop - distFromTop}px)`;
    }
}