const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');

let clicked = false;
let xAxis;
let x;

sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = `grab`;
}) 
sliderContainer.addEventListener('mousedown', e => {
    clicked = true
    xAxis = e.offsetX - slider.offsetLeft;
    // tells the current position

    sliderContainer.style.cursor = `grabbing`
})

window.addEventListener('mouseup', () => {
    clicked = false
})

sliderContainer.addEventListener('mousemove', e => {
    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;
    // but we dont want it to scroll forever

    checkSize()
})

function checkSize () {
    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < sliderContainerOut.right) {
        slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`
    }
}