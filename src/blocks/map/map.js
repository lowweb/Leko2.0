
// let marks = document.querySelectorAll(".map__mark");
// let tooltip = document.querySelector(".tooltip");
// let tooltipData = [
//    {
//      "cap": "Шенджень", 
//      "type": "Прямой рейс",
//      "close": "Пятница",
//      "exit": "Каждый четверг",
//      "time": "Ориентировочно 3 дня"
//    },
//    {
//      "cap": "Тайвань", 
//      "type": "Прямой рейс",
//      "close": "Суббота",
//      "exit": "Каждый вторник",
//      "time": "Ориентировочно 5 дней"
//   },
//   {
//     "cap": "Пусан",
//     "type": "Прямой рейс",
//     "close": "Пятница",
//     "exit": "Каждый четверг",
//     "time": "Ориентировочно 3 дня"
//   },
//   {
//     "cap": "Циндао",
//     "type": "Прямой рейс",
//     "close": "Пятница",
//     "exit": "Каждый четверг",
//     "time": "Ориентировочно 3 дня"
//   },
//   {
//     "cap": "Тяньдзинь",
//     "type": "Прямой рейс",
//     "close": "Пятница",
//     "exit": "Каждый четверг",
//     "time": "Ориентировочно 3 дня"
//   },
//   {
//     "cap": "Шанхай",
//     "type": "Прямой рейс",
//     "close": "Пятница",
//     "exit": "Каждый четверг",
//      "time": "Ориентировочно 3 дня"
//   },
//   {
//     "cap": "Сямынь",
//     "type": "Прямой рейс",
//     "close": "Пятница",
//     "exit": "Каждый четверг",
//     "time": "Ориентировочно 3 дня"
//   }
// ]



// if (document.querySelectorAll(".map__mark")) {
  

//   for (i = 0; i < marks.length; ++i) {
//     marks[i].onmousemove = (e)=>{

//       let x = e.clientX + 20
//       let y = e.clientY + 20 
//       let tooltipHeight = tooltip.getBoundingClientRect()

//       if (y > window.innerHeight / 2) {
//         y = e.clientY  - tooltipHeight 
//       }
//       for (var i = 0; i < tooltip.childNodes.length; i++) {
//         if (tooltip.childNodes[i].className == "tooltip__cap") {
//           tooltip.childNodes[i].innerHTML = tooltipData[e.target.dataset.id].cap
//         }
//         if (tooltip.childNodes[i].className == "tooltip__type") {
//           tooltip.childNodes[i].innerHTML = tooltipData[e.target.dataset.id].type
//         } 
//         if (tooltip.childNodes[i].className == "tooltip__close") {
//           tooltip.childNodes[i].innerHTML = tooltipData[e.target.dataset.id].close
//         } 
//         if (tooltip.childNodes[i].className == "tooltip__exit") {
//           tooltip.childNodes[i].innerHTML = tooltipData[e.target.dataset.id].exit
//         }
//         if (tooltip.childNodes[i].className == "tooltip__time") {
//           tooltip.childNodes[i].innerHTML = tooltipData[e.target.dataset.id].time
//         }          
//     }
//       tooltip.style.top = y +"px"
//       tooltip.style.left = x + "px"
//       tooltip.classList.add('tooltip--active'); 
//     }

//       marks[i].onmouseout = ()=>{
//         tooltip.classList.remove('tooltip--active');
//       }

//   }
// }



