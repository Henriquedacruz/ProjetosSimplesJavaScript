const btnIncrement = document.getElementById ( 'btn-increase1' );  
const btnDecrement = document.getElementById ( 'btn-decrease1' );  
const btnReset = document.getElementById ( 'btn-reset' );  
const btnIncrement2 = document.getElementById ( 'btn-increase2' );  
const btnDecrement2 = document.getElementById ( 'btn-decrease2' );  


const points = document.getElementById ( 'value1' );
let value1 = 0;
points.innerHTML = value1;


const points2 = document.getElementById ( 'value2' );
let value2 = 0;
points2.innerHTML = value2;

function decreasePoint() {
  if ( value1 <= 0 ) { 
    alert("A pontuação já está no minimo possivel");
} else{
  document.querySelector('#value1').textContent = --value1;
}
}
function increasePoint() {
  document.querySelector('#value1').textContent = ++value1; 
}

function reset() {
  value1 = 0
  points.innerHTML = value1
  value2 = 0
  points2.innerHTML = value2
}

function decreasePoint2() {
  if ( value2 <= 0 ) { 
    alert("A pontuação já está no minimo possivel");
} else{
  document.querySelector('#value2').textContent = --value2;
}
}
function increasePoint2() {
  document.querySelector('#value2').textContent = ++value2; 
}

btnDecrement.addEventListener ( 'click', decreasePoint);
btnIncrement.addEventListener ( 'click', increasePoint);
btnDecrement2.addEventListener ( 'click', decreasePoint2);
btnIncrement2.addEventListener ( 'click', increasePoint2);
btnReset.addEventListener ( 'click', reset);



