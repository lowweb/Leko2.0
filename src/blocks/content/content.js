window.onscroll = function() {scrollFunction()};

//функция определения положение яэлемента
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
//определили якорь
let el=document.getElementById('content-anch');
let toTopButton = document.getElementById("toTopButton");

function scrollFunction() {
  if (document.body.scrollTop > getOffset(el).top - 190 || document.documentElement.scrollTop > getOffset(el).top - 190) {
    document.getElementsByClassName('header')[0].classList.add('header--fix');
    toTopButton.classList.add('totop--active');
    // document.getElementsByClassName('header')[0].classList.remove('header--tr');
  } else {
    document.getElementsByClassName('header')[0].classList.remove('header--fix');
    toTopButton.classList.remove('totop--active');
    // document.getElementsByClassName('header')[0].classList.add('header--tr');
  }
}