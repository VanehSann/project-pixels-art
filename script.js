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
// Incompleto para os bonus
function linha() {
  // t
  const colorBoard = document.createElement('div');
  colorBoard.id = 'linha';
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
//  imprimindo colunas
const inputGradeLinha = 5;
const colunasGrade = inputGradeLinha * inputGradeLinha;
for (let i = 0; i < inputGradeLinha; i += 1) {
  linha();
}
for (let j = 0; j < colunasGrade; j += 1) {
  linhaU();
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
