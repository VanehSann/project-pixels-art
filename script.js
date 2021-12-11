// criando o #color-pallete
const colorPalletePri = document.querySelector('.priCard');
colorPalletePri.style.backgroundColor = 'rgb(0, 0, 0)';

const colorPalleteSec = document.querySelector('.secCard');
colorPalleteSec.style.backgroundColor = 'rgba(255, 0, 0, 1)';

const colorPalleteTerc = document.querySelector('.tercCard');
colorPalleteTerc.style.backgroundColor = 'rgba(255, 235, 59, 1)';

const colorPalleteQuat = document.querySelector('.quatCard');
colorPalleteQuat.style.backgroundColor = 'rgb(3, 169, 244, 1)';

function linha() {
  for (let i = 0; i < 5; i += 1) {
    const cardPai = document.querySelector('#pixel-board');
    const cardFilho = document.createElement('div');
    cardPai.appendChild(cardFilho);
    cardFilho.style.backgroundColor = 'rgba(255, 255, 255, 255)';
    cardFilho.classList.add('pixel');
    console.log(cardPai);
    console.log(cardFilho);
  }
}

function coluna() {
  for (let i = 0; i < 5; i += 1) {
    const cardPaia = document.querySelector('#pixel-board');
    const cardFilho = document.createElement('div');
    cardPaia.appendChild(cardFilho);
    console.log(cardPaia);
  }
}

for (let i = 0; i < 5; i += 1) {
  coluna();
  linha();
}
