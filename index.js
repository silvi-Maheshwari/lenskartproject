const slider = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slidePosition = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSliderPosition() {
    slider.style.transform =    `translateX(${-slidePosition * 100}%)`; // Translate based on slide width (100%)
}

function nextSlide1() {
    if (slidePosition < totalSlides - 1) {
        slidePosition++;
    } else {
        slidePosition = 0;
    }
    updateSliderPosition();
}

function prevSlide1() {
    if (slidePosition > 0) {
        slidePosition--;
    } else {
        slidePosition = totalSlides - 1;
    }
    updateSliderPosition();
}

nextBtn.addEventListener('click', nextSlide1);
prevBtn.addEventListener('click', prevSlide1);
// 


const slider1 = document.querySelector('.slideMove');
const prevBtn1 = document.querySelector('.prev-btn2');
const nextBtn1 = document.querySelector('.next-btn2');

let slidePosition1 = 0;
const slides1 = document.querySelectorAll('.slide2');
const totalSlides1 = slides1.length;

function updateSliderPosition1() {
    slider1.style.transform = `translateX(${-slidePosition1 * 25}%)`; // Translate based on slide width (25%)
}

function nextSlide2() {
    if (slidePosition1 < totalSlides1 - 4) {
        slidePosition1=slidePosition1+4;
        updateSliderPosition1();
    }
}

function prevSlide2() {
    if (slidePosition1 > 0) {
        slidePosition1=slidePosition1-4;
        updateSliderPosition1();
    }
    
}


const slider11 = document.querySelector('.slideMove1');
const prevBtn11 = document.querySelector('.prev-btn21');
const nextBtn11 = document.querySelector('.next-btn21');

let slidePosition11 = 0;
const slides11 = document.querySelectorAll('.slide21');
const totalSlides11 = slides11.length;

function updateSliderPosition11() {
    slider11.style.transform = `translateX(${-slidePosition11 * 33}%)`; // Translate based on slide width (25%)
    if(slidePosition11===0){
    prevBtn11.style.display="none";
}
else{
    prevBtn11.style.display="block";
}
}

function nextSlide() {
    if (slidePosition11 < totalSlides11 - 4) {
        slidePosition11=slidePosition11+3;
        updateSliderPosition11();
    }
}

function prevSlide() {
    if (slidePosition11 > 0) {
        slidePosition11=slidePosition11-3;
        updateSliderPosition11();
    }
    
}
updateSliderPosition11();



var popup = document.getElementById("popup");
var closeButton = document.getElementById("close");


var popupButton = document.getElementById("popupButton");


popupButton.addEventListener("click",function(){
    popup.style.display="flex"
})


closeButton.addEventListener("click",function(){
  popup.style.display = "none";


})

var popup2 = document.getElementById("popupform");
var popupButton21 = document.getElementById("popupButton2");
var closeButton2 = document.getElementById("close2");

popupButton21.addEventListener("click",function(){
    popup2.style.display="block"
})


closeButton2.addEventListener("click",function(){
  popup2.style.display = "none";


})