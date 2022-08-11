AOS.init({
  duration: 3000,
  once: true,
});

$(function () {
  var navbar = $(".header-inner");
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 40) {
      navbar.removeClass("navbar-scroll");
    } else {
      navbar.addClass("navbar-scroll");
    }
  });
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
function plusDivsn(n) {
  showDivsn((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}
function currentDivn(n) {
  showDivsn((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-red";
}
function showDivsn(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesn");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-red";
}
