
let cards = document.querySelectorAll(".advant__item");
let field = document.querySelector(".advant");



if (cards) {
  
  field.onmouseout = ()=>{

    for (i = 0; i < cards.length; ++i) {
      cards[i].style.transform = "rotateY(0) rotateX(0)"
    }
  }
  let oldX = 0
  let oldY = 0

  field.onmousemove = (e)=>{

    let x = e.pageX
    let y = e.pageY

    if ( x > oldX) {
      if (y > oldY) {
        for (i = 0; i < cards.length; ++i) {
          cards[i].style.transform = "rotateY("+ -10 +"deg) rotateX("+ -15 +"deg)"
        }
      }
      if (y < oldY) {
        for (i = 0; i < cards.length; ++i) {
          cards[i].style.transform = "rotateY("+ -10 +"deg) rotateX("+ 15 +"deg)"
        }
      }
    }
    if ( x < oldX) {
      if (y > oldY) {
        for (i = 0; i < cards.length; ++i) {
          cards[i].style.transform = "rotateY("+ 10 +"deg) rotateX("+ -15 +"deg)"
        }
      }
      if (y < oldY) {
        for (i = 0; i < cards.length; ++i) {
          cards[i].style.transform = "rotateY("+ 10 +"deg) rotateX("+ 15 +"deg)"
        }
      }
    }


    oldX = x;
    oldY = y;

  }
 
}
