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



console.log(Вёрстка соответствует макету. Ширина экрана 768px +26 \n
  блок <header> +2\n
  секция Welcome +2\n
  секция About +2. Обратите внимание на появление новых элементов в виде стрелок.\n
  ❗Обратите внимание. На макете в секции About расположены 3 точки навигации по слайдам под картинкой. Нужно сделать 5 точек, т.к. картинки лишь скрываются, а не пропадают. Если под картинкой находится 5 точек: +2\n
  секция Favorites +4\n
  секция CoffeShop +4\n
  секция Contacts +4\n
  секция LibraryCard +4\n
  блок <footer> + 2\n
  Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n
  нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\n
  элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.\n
  элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4. Например, меню в хедере должно преобразоваться в бургер-меню до того, как элементы начнут наезжать друг на друга.\n
  все что будет происходить на ширине свыше 1440px - не оценивается. Поэтому можно либо растягивать на весь экран, либо оставить центральной колонкой.\n
  На ширине экрана 768рх реализовано адаптивное меню +12 (Рекомендуется сделать появление бургер-меню на ширине 1024px):\n
  если при ширине страницы в 768рх панель навигации не скрыта, а бургер-иконка не появилась (при этом учитывайте "Особенности проверки адаптивности в DevTools"), то ставим 0 за данный пункт, и дальше его не проверяем. Иначе:\n
  при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n
  при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +4\n
  ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2\n
  размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2\n
  Все критерии выполнены. Если еесть какие то спорные вопросы, прошу не судить сразу строго, а написать в Discord для обсуждения.\n











  
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


