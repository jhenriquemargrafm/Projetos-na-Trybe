const generateButton = document.querySelector('#criar-carta');
const originalText = document.querySelector('#carta-texto');
const allSpans = document.querySelector('#carta-gerada');
const counter = document.querySelector('#carta-contador');
let count = 0;

// Criação de grupos de classes
const spanStyle = ['newspaper', 'magazine1', 'magazine2'];
const spanSize = ['medium', 'big', 'reallybig'];
const spanRotation = ['rotateleft', 'rotateright'];
const spanWay = ['skewleft', 'skewright'];

// função para alocar classes
function sortClasses() {
  const span = document.querySelectorAll('span');
  for (let index = 0; index < span.length; index += 1) {
    let classIndex = Math.floor(Math.random() * spanStyle.length);
    span[index].classList.add(`${spanStyle[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanSize.length);
    span[index].classList.add(`${spanSize[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanRotation.length);
    span[index].classList.add(`${spanRotation[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanWay.length);
    span[index].classList.add(`${spanWay[classIndex]}`);
  }
}

// Função editar palavra
function editWord() {
  allSpans.addEventListener('click', (eventoDeOrigem) => {
    const clickedWord = eventoDeOrigem.target;
    clickedWord.className = ' ';
    let classIndex = Math.floor(Math.random() * spanStyle.length);
    clickedWord.classList.add(`${spanStyle[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanSize.length);
    clickedWord.classList.add(`${spanSize[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanRotation.length);
    clickedWord.classList.add(`${spanRotation[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanWay.length);
    clickedWord.classList.add(`${spanWay[classIndex]}`);
  });
}
editWord();

generateButton.addEventListener('click', () => {
  allSpans.innerText = '';
  const string = originalText.value;
  const array = string.split(' ');
  if (originalText.value.trim() === '') {
    allSpans.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = array[index];
      allSpans.appendChild(span);
    }
    sortClasses();
    count = array.length;
    counter.innerText = `${count}`;
  }
});
