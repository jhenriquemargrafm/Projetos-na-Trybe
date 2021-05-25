// Escrever o texto recebido no input dentro do container
const input = document.querySelector('#text-input');
const text = document.querySelector('#meme-text');
input.addEventListener('keyup', (event) => {
  text.innerText = `${event.target.value}`;
});

// Fazendo o load da imagem
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function loadImage() {
  const loadedImage = document.querySelector('#meme-insert');
  loadedImage.addEventListener('change', (event) => {
    const output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  });
}
loadImage();

// Aplicando estilo com os botões
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

fireButton.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  container.style.border = '6px groove green';
});

// Colocando uma imagem do grupo de imagens
const memeImage = document.getElementById('meme-image');
const memes = document.getElementById('memes');
memes.addEventListener('click', (eventoDeOrigem) => {
  memeImage.src = eventoDeOrigem.target.src;
});
