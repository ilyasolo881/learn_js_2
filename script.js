const item = {
    slider: document.querySelector(".slider"),
    sliderLine: document.querySelector(".slider__line"),
    sliderImg: document.querySelectorAll(".slider__img"),
    previos: document.querySelector(".slider__previous"),
    next: document.querySelector(".slider__next"),
    inputEndless: document.querySelector(".endless"),
    inputAutoplay: document.querySelector(".autoplay"),
}
console.log(item.sliderLine.children.length - 1);

let sliderCount = 0;
let timer = 0;
let sliderWidth = item.slider.offsetWidth;

item.next.addEventListener("click", nextSlide);
item.previos.addEventListener("click", previousSlide)

function nextSlide(){
    if (endless() === true){
        if (sliderCount === item.sliderLine.children.length - 1){
            item.previos.style.pointerEvent = "none"
        }else{  
            sliderCount ++;
        }
    }else if (endless() === false){
        if (sliderCount >= item.sliderLine.children.length - 1){
            sliderCount = 0;
        }else{  
            sliderCount ++;
        }
    }
    rollSlider();
}
function previousSlide(){
    if (endless() === true){
        if (sliderCount === 0){
            item.previos.style.pointerEvent = "none"
        }else{
            sliderCount --;
        }
    }else if(endless() === false){
        if (sliderCount <= 0){
            sliderCount = item.sliderLine.children.length - 1;
        }else{
            sliderCount --;
        }
    }
    rollSlider();
}
function rollSlider(){
    item.sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

item.inputEndless.addEventListener("click",endless)

function endless(){
    if(item.inputEndless.checked){  
        return false
    }else{
        return true
    }   
}

item.inputAutoplay.addEventListener("click",autoSlide) 

function autoSlide(){
    if (item.inputAutoplay.checked){
        timer = setInterval(nextSlide, 3000)
    }else{
        clearInterval(timer);
    }
}