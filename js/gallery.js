let slideIndex = 1;

currentSlide(1);

function plusSlides() {
    showSlides(slideIndex += 1);
}

function automaticallyMoveSlide(){
    currentSlide(slideIndex += 1);
}

function minusSlides() {
    showSlides(slideIndex -= 1)
}


function currentSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout( automaticallyMoveSlide, 5000 );
}


function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}