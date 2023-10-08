let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(){
    showSlides(slideIndex += 1);
    noEndless();
}
function previousSlide(){
    showSlides(slideIndex -= 1);
    noEndless();
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let slides = document.querySelectorAll(".item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";    
}

function noEndless(){
    const check = document.querySelector(".noEndless");
    const button1 = document.querySelector(".previous");
    const button2 = document.querySelector(".next");
    if (check.checked) {
        if (slideIndex === 1) {
            button1.style.pointerEvents = "none";
        }
        else{
            button1.style.pointerEvents = "visiblePainted";
        }
        if(slideIndex === 3){
            button2.style.pointerEvents = "none";
        }
        else{
            button2.style.pointerEvents = "visiblePainted";
        }
    }
}

function autoplay(){
    clearInterval(autoplay);
    const button = document.querySelector(".next");
    const check = document.querySelector(".autoplay");
    if (check.checked) {
        setInterval (() => button.click(), 2000)
    }
}