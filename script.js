// Cores das Paletas
// Primeira cor - Fixa - Cor preta [0]
const priCard = document.querySelector('#priCard');
priCard.style.backgroundColor = 'black';
// Cores aleatorias + por enquanto serão predeterminadas
// [1]
const segCard = document.querySelector('#segCard');
segCard.style.backgroundColor = 'yellow';
// [2]
const tercCard = document.querySelector('#tercCard');
tercCard.style.backgroundColor = 'green';
// [3]
const quatCard = document.querySelector('#quatCard');
quatCard.style.backgroundColor = 'orange';
// funcao das cores de baixo - inspirado e adaptado [ABAIXO]:
// https://projects.raspberrypi.org/pt-PT/projects/pixel-art/4
let pixelCores = 'black';
priCard.onclick = function unnamed() {
  pixelCores = 'black';
};
segCard.onclick = function unnamed() {
  pixelCores = 'yellow';
};
tercCard.onclick = function unnamed() {
  pixelCores = 'green';
};
quatCard.onclick = function unnamed() {
  pixelCores = 'orange';
};
// Incompleto para os bonus
function removeBoard() {
  const visibles = document.querySelectorAll('#linha');
  
   for (let i = 0; i < visibles.length; i += 1) {
    visibles[i].remove();
  }
  }

// 
const boardSize = document.getElementById('board-size');
// console.log(boardSize.value);
// let valorDoGerador = boardSize.value;
let lin = Number(boardSize.value);
function boardValidation() {
  const visible = document.querySelectorAll('.visible');
  for (let i = 0; i < visible.length; i += 1) {
    visible[i].remove();
  }
  const boardSize = document.getElementById('board-size');
 let lin = Number(boardSize.value);
if(boardSize.value == '') {
alert('Board Inválido!')
} 
else {
   if(boardSize.value > 0 && boardSize.value <= 50){
 removeBoard();
     lin = Number(boardSize.value);
    }
    if(boardSize.value > 50) {
removeBoard();
       lin = 50;
    }
    if(boardSize.value < 5) {
  removeBoard();
       lin = 5;
    }
  const inputGradeLinha = lin;
const colunasGrade = inputGradeLinha * inputGradeLinha;
for (let i = 0; i < inputGradeLinha; i += 1) {
  linha();
}
for (let j = 0; j < colunasGrade; j += 1) {
  linhaU();
}
// }
// else if(boardSize.value > 0 && boardSize.value <= 50){
// // console.log('antes', valorDoGerador, 'depois', valorNumericoDoGerador )
// // let lin = Number(boardSize.value);
// // return lin;
// alert('Board Inválido 2')
// }
// else if(boardSize.value > 50) {
// //   let lin = 50;
// // return lin;
// alert('Board Inválido 3')
// }
// else if(boardSize.value < 5) {
//   // let lin = 5;
//   // return lin;
//   alert('Board Inválido 4')
// }
}
}
// Incompleto para os bonus
function linha() {
  // t
  const colorBoard = document.createElement('div');
  colorBoard.id = 'linha';
  // colorBoard.className = 'visible';
  // colorBoard.className = 'visible'
  // g
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.appendChild(colorBoard);
  document.body.appendChild(pixelBoard);
}
// Incompleto para os bonus
function linhaU() {
// t
// g
  const pixelColor = document.createElement('div');
  pixelColor.className = 'pixel';
  pixelColor.onclick = function unnamedU() {
    this.style.backgroundColor = pixelCores;
  };
  const pixelBoard = document.querySelector('#pixel-board');
  const colorBoard = document.querySelector('#linha');
  colorBoard.appendChild(pixelColor);
  pixelBoard.appendChild(colorBoard);
}
// separando
// Incompleto para os bonus
function linhaHidden() {
  // t
  const colorBoard = document.createElement('div');
  colorBoard.className = 'visible';
  // g
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.appendChild(colorBoard);
  document.body.appendChild(pixelBoard);
}
// Incompleto para os bonus
function linhaUHidden() {
// t
// g
  const pixelColor = document.createElement('div');
  pixelColor.className = 'pixel';
  pixelColor.onclick = function unnamedU() {
    this.style.backgroundColor = pixelCores;
  };
  const pixelBoard = document.querySelector('#pixel-board');
  const colorBoard = document.querySelector('.visible');
  colorBoard.appendChild(pixelColor);
  pixelBoard.appendChild(colorBoard);
}
//  imprimindo colunas
const inputGradeLinhaHidden = 5;
const colunasGradeHidden = inputGradeLinhaHidden * inputGradeLinhaHidden;
for (let i = 0; i < inputGradeLinhaHidden; i += 1) {
  linhaHidden();
}
for (let j = 0; j < colunasGradeHidden; j += 1) {
  linhaUHidden();
}
// segundo
function limpa() {
// teste
  const pixelLet = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelLet.length; i += 1) {
    pixelLet[i].style.backgroundColor = 'white';
  }
}
const limpar = document.querySelector('#clear-board').addEventListener('click', limpa);
// só pra limpar o lint
console.log(limpar);
// 7 - referência de maneiras de usar o forEach:
// em = https://stackoverflow.com/questions/65530318/add-remove-class-when-clicking-on-element-with-pure-javascript
const selectedColor = document.querySelectorAll('.color');
selectedColor.forEach((i) => {
  i.addEventListener('click', function semNome() {
    selectedColor.forEach((j) => j.classList.remove('selected'));
    this.classList.add('selected');
  });
});
