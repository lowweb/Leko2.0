var modal = document.getElementById("simplCalc");
var btn;
if (document.getElementById("openSimplCalc")) {
  btn = document.getElementById("openSimplCalc");
}
else {
  btn = document.getElementById("openAuthCalc");
}

var closeBtn = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.querySelector(".page__body").classList.add('page__body--modalopen');
}


closeBtn.onclick = function() {
  modal.style.display = "none";
  document.querySelector(".page__body").classList.remove('page__body--modalopen');
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector(".page__body").classList.remove('page__body--modalopen');
  }
}