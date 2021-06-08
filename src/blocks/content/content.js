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
var el=document.getElementById('content-anch');

function scrollFunction() {
  if (document.body.scrollTop > getOffset(el).top - 90 || document.documentElement.scrollTop > getOffset(el).top - 20) {
    document.getElementsByClassName('header')[0].classList.add('header--fix');
    // document.getElementsByClassName('header')[0].classList.remove('header--tr');
  } else {
    document.getElementsByClassName('header')[0].classList.remove('header--fix');
    // document.getElementsByClassName('header')[0].classList.add('header--tr');
  }
}