// Variables
let products = document.getElementsByClassName("product");
let slider = document.getElementById("slider");
let btnRight = document.getElementById("slide-right");
let btnLeft = document.getElementById("slide-left");

btnLeft.addEventListener('click', () => slider.scrollLeft -= 125);
btnRight.addEventListener('click', () => slider.scrollLeft += 125);

let maxScrollLeft = slider.scrollWidth - slider.clientWidth;


// Auto Play Slider
/*
function autoPlay () {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
*/
const autoPlay = () => slider.scrollLeft > (maxScrollLeft - 1) ? slider.scrollLeft -= maxScrollLeft : slider.scrollLeft += 1;



let play = setInterval(autoPlay, 50);

// Pause The Slider On Hover

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('mouseover', () => {
        clearInterval(play);
    })
    products[i].addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 50);
    })
}
