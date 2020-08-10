
/*-------------------------------------*/

window.onscroll = scrollFunction;

var Gotop = document.getElementById("topBtn");
var header = document.getElementById("header");
var logo = document.getElementById("logo");

var width = screen.width;
var height = screen.height;

if (width > 480) {
  header.style.height = "120px";
  logo.style.height = "100px";
}

if (width < 620) {
  header.style.height = "80px";
  logo.style.height = "75px";
}

if (width < 480) {
  header.style.height = "80px";
  logo.style.height = "75px";
}


function scrollFunction() {
  if (width > 1024) {
    if (document.documentElement.scrollTop > 50) {
      Gotop.style.display = "block";
    } 
    else {
      Gotop.style.display = "none";
    }
  }

  if (width > 620) {
    if (document.documentElement.scrollTop < 550) {
      header.style.height = "120px";
      logo.style.height = "100px";
    } 
    else {
      header.style.height = "80px";
      logo.style.height = "75px";
    }
  } 

  if (width < 480) { 
    if (document.documentElement.scrollTop < 550) {
      header.style.height = "80px";
      logo.style.height = "75px";
    } 
    else {
      header.style.height = "60px";
      logo.style.height = "50px";
    }
  } 
}

function gotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*-------------------------------------*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var teaching = document.getElementsByClassName("teaching");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  for (i = 0; i < teaching.length; i++) {
    teaching[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  teaching[slideIndex-1].style.display = "block";
}

/*-------------------------------------*/

function menu() {
  
  var ul=document.getElementById("ul");
  if (ul.className == "show") {
    ul.className="unlock";
  }
  else {
    ul.className="show";
  }

}


