// const number = document.getElementById("randomNumber");

// const random = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// number.innerHTML = random(1, 200);

$(document).ready(function(){
    $('.number').counterUp({
      time: 1200
    });
  })