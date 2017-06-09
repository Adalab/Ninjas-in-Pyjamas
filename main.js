"use strict";
var menu = document.getElementById('menu');
var nav = document.getElementById('navShow');
var header = document.getElementById('header');
var btnOne = document.getElementById("one");
var btnTwo = document.getElementById("two");
var btnThree = document.getElementById("three");
var container = document.querySelector(".homecontainer");

menu.addEventListener('click',mobileMenu);
function mobileMenu() {
  nav.classList.toggle("list-show");
  menu.classList.toggle("open");
}
window.addEventListener('scroll', changeOpacity);
function changeOpacity() {
  if(document.body.scrollTop > header.offsetHeight){
    header.classList.add('opacity');
  } else {
    header.classList.remove('opacity');
  }
}

btnOne.addEventListener("click", changeOne);
btnTwo.addEventListener("click", changeOne);
btnThree.addEventListener("click", changeOne);
var currentSlideClass = "slide-one";
var currentButtonId = "one";

var image2 = new Image();
image2.src = "Images/Pueblo 50 opacidad.jpg";
var image2 = new Image();
image2.src = "Images/Manos abuela 50 opacidad.jpg";

function changeOne(event) {
  var currentButton = event.currentTarget;
  var id = currentButton.getAttribute('id');

  if (id !== currentButtonId) {
    var previousButton = document.getElementById(currentButtonId);
    var nextSlideClass = "slide-" + id;

    previousButton.classList.remove("btn-active");
    currentButton.classList.add("btn-active");
    container.classList.remove(currentSlideClass);
    container.classList.add(nextSlideClass);

    currentButtonId = id;
    currentSlideClass = nextSlideClass;
  }

}
