
let thermometerLevel = 105;
let form = '';
let canvas = '';
let ctx = '';

window.addEventListener('load', function() {	
  const inputField = document.querySelector('#inputField');
  form = document.querySelector('#form'); 
  canvas = document.querySelector('#myCanvas');
  ctx = canvas.getContext('2d');
  form.addEventListener('submit', logSubmit);
	init();
});

function init() {
 ctx.shadowColor = '#d53';
 ctx.shadowBlur = 20;
 ctx.lineJoin = 'bevel';
 ctx.lineWidth = 15;
 ctx.strokeStyle = '#38f';
 ctx.strokeRect(300, 50, 30, 550);

 ctx.beginPath();
 ctx.arc(315, 600, 50, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.lineWidth = 1;
 ctx.strokeStyle = 'black';

 measureScale(ctx); 
}

const measureScale = ctx => {

  let posXbegin = 375;
  let posYbegin = 600;

  for (posYbegin; posYbegin >= 50; posYbegin -= 25) {
    draw(posXbegin, posYbegin, ctx);
  }

}
	// 25 pixels = 5 degrees f



  let i = 0;

const makeTemp = () => {


  console.log('thermometerLevel: ', thermometerLevel, 'i: ', i);

  if (i === thermometerLevel-1) { 
	  console.log('here');
  }

  if (i===thermometerLevel) {
    console.log('here i is equal to thermometerLevel');
  }

  ctx.fillStyle = 'red';
  
  if (i < thermometerLevel) {
    window.requestAnimationFrame(makeTemp);
    i++
    } else {
      i = 0;
    }

    ctx.fillRect(305, 600, 20, -(i*5));
}

function divByTen(x) {
  return x % 10 === 0;
}

const draw = (posXb, posYb, ctx) => {
     let tick = divByTen(posYb) ;
     tick ? tick = 40 : tick = 20;
     ctx.beginPath();
     ctx.moveTo(posXb, posYb);
     ctx.lineTo(posXb+tick, posYb);
     ctx.stroke();
}

function logSubmit(event) {
  event.preventDefault();
  thermometerLevel = inputField.value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
  window.requestAnimationFrame(makeTemp);  
}



