
let cards = document.querySelectorAll(".advant__item");
let field = document.querySelector(".advant");

let cardLocation = field.getBoundingClientRect();


field.onmouseout = ()=>{

  for (i = 0; i < cards.length; ++i) {
    cards[i].style.transform = "rotateY(0) rotateX(0) scale(1)"
  }
}
field.onmousemove = (e)=>{

  let x = ((e.pageX - cardLocation.left) / cardLocation.width) * 2 - 1
  let y = ((e.pageY - cardLocation.top) / cardLocation.height) * 2 -1
  
// console.log ('x='+x)
// console.log ('y=' +y)
  let rotateX = -y*15;
  let rotateY =  x*15;

  // if (rotateY > 10) {
  //   rotateY = 10;
  // }
  // if (rotateY < -5) {
  //   rotateY = -5;
  // }

  // if (rotateX < 348) {
  //   rotateX = 348
  // }

  // if (rotateX > 370) {
  //   rotateX = 370
  // }
  for (i = 0; i < cards.length; ++i) {
    cards[i].style.transform = "rotateY("+rotateY+"deg) rotateX("+rotateX+"deg)"
  }

}