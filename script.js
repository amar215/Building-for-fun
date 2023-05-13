const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");

num1.value = Math.round(Math.random() * 100);
num2.value = Math.round(Math.random() * 100);

const number1 = Number(num1.value);
const number2 = Number(num2.value);

const total = number1 + number2;

document.querySelector(".total").value = total;

// Progress bar

const greyBar = document.querySelector(".greyBar");
const timeBar = document.querySelector(".timeBar");

//  timeBar.style.backgroundColor = 'black';
//  greyBar.style.backgroundColor = 'yellow';
if (number1 + number2 == total) {
  greyBar.style.width = "12rem";
}

// Win or Loose Message

// if (remainingPoints == 5){
// document.body.style.backgroundColor = 'rgb(255, 101, 101)';
// }

// random javasript


document.querySelector('.btn').addEventListener('click', ()=> alert('lksdjf'));
