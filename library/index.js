// открытие меню при нажатии на кнопку
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
document.querySelector(".header").classList.toggle("open")
  });
  //закрытие меню при нажатии esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.querySelector(".header").classList.remove("open")
  }
})
// закрытие меню при нажатии на любую область страницы
document.getElementById("menu-burger").addEventListener("click", event => {
event._isClickWhithMenu = true; 
document.querySelector(".header").classList.remove("open")
});
document.getElementById("burger").addEventListener("click", event => {
  event._isClickWhithMenu = true; 
  });
  document.body.addEventListener("click", event => {
   if (event._isClickWhithMenu) return;
   document.querySelector(".header").classList.remove("open")
    });
  });



  
 /* 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  showSlides(slideIndex += 1);
}
function minusSlide() {
  showSlides(slideIndex -= 1);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
*/


