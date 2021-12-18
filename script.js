// Cores das Paletas - Adaptado e inspirado no link abaixo
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function colorValidation() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r},${g},${b})`;
}
const cor1 = colorValidation();
const cor2 = colorValidation();
const cor3 = colorValidation();

// Primeira cor - Fixa - Cor preta [0]
const priCard = document.querySelector('#priCard');
priCard.style.backgroundColor = 'black';
// Cores aleatorias + por enquanto serão predeterminadas
// [1]
const segCard = document.querySelector('#segCard');
segCard.style.backgroundColor = cor1;
// [2]
const tercCard = document.querySelector('#tercCard');
tercCard.style.backgroundColor = cor2;
// [3]
const quatCard = document.querySelector('#quatCard');
quatCard.style.backgroundColor = cor3;
// funcao das cores de baixo - inspirado e adaptado [ABAIXO]:
// https://projects.raspberrypi.org/pt-PT/projects/pixel-art/4
let pixelCores = 'black';
priCard.onclick = function unnamed() {
  pixelCores = 'black';
};
segCard.onclick = function unnamed() {
  pixelCores = cor1;
};
tercCard.onclick = function unnamed() {
  pixelCores = cor2;
};
quatCard.onclick = function unnamed() {
  pixelCores = cor3;
};
//
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
// para limpar o linter
console.log(lin);
//
function visibleValidation() {
  const visible = document.querySelectorAll('.visible');
  for (let i = 0; i < visible.length; i += 1) {
    visible[i].remove();
  }
}
//
function criandoBoard(inputGradeLinha, colunasGrade) {
  for (let i = 0; i < inputGradeLinha; i += 1) {
    linha();
  }
  for (let j = 0; j < colunasGrade; j += 1) {
    linhaU();
  }
}
//
function validationBoard() {
  if (boardSize.value > 0 && boardSize.value <= 50) {
    removeBoard();
    lin = Number(boardSize.value);
  }
  if (boardSize.value > 50) {
    removeBoard();
    lin = 50;
  }
  if (boardSize.value < 5) {
    removeBoard();
    lin = 5;
  }
}
//
//
function boardValidation() {
  visibleValidation();
  if (boardSize.value === '') {
    alert('Board Inválido!');
  } else {
    validationBoard();
    const inputGradeLinha = lin;
    const colunasGrade = inputGradeLinha * inputGradeLinha;
    criandoBoard(inputGradeLinha, colunasGrade);
  }
}
//
// limpar o lint
const valid = document.querySelector('#gBTest').addEventListener('click', boardValidation);
// só pra limpar o lint
console.log(valid);
// console.log(boardValidation());
// Incompleto para os bonus
// separando
// Incompleto para os bonus
function linhaHidden() {
  // t
  const colorBoardHidden = document.createElement('div');
  colorBoardHidden.className = 'visible';
  // g
  const pixelBoardHidden = document.querySelector('.hidden');
  pixelBoardHidden.appendChild(colorBoardHidden);
  document.body.appendChild(pixelBoardHidden);
}
// Incompleto para os bonus
function linhaUHidden() {
// t
// g
  const pixelColorHidden = document.createElement('div');
  pixelColorHidden.className = 'pixel';
  pixelColorHidden.onclick = function unnamedU() {
    this.style.backgroundColor = pixelCores;
  };
  const pixelBoardHidden = document.querySelector('.hidden');
  const colorBoardHidden = document.querySelector('.visible');
  colorBoardHidden.appendChild(pixelColorHidden);
  pixelBoardHidden.appendChild(colorBoardHidden);
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
