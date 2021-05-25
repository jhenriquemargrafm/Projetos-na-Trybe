const submit = document.getElementById('submit'); // variável recebendo o botão submit

// Código para conferência do email e da senha
submit.addEventListener('click', () => {
  const useremail = document.getElementById('email'); // Variavel recebendo o email
  const pass = document.getElementById('pass'); // variavel recebendo o password
  const insertedEmail = useremail.value;
  const insertedPass = pass.value;
  if (insertedEmail === 'tryber@teste.com' && insertedPass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Código para fazer contador
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');

text.addEventListener('input', (originEvent) => {
  const currentLength = originEvent.target.value.length;
  counter.innerText = 500 - currentLength;
});

// Código para habilitar botão Enviar
const agreementBox = document.querySelector('#agreement');
const submitFormButton = document.querySelector('#submit-btn');

agreementBox.addEventListener('input', () => {
  if (agreementBox.checked) {
    submitFormButton.removeAttribute('disabled');
  } else {
    submitFormButton.setAttribute('disabled', '_self');
  }
});

// Pegando informações preenchidas para criar textos
const allText = document.querySelector('#evaluation-form');
const theName = document.querySelector('#input-name');
const theSurname = document.querySelector('#input-lastname');
const theEmail = document.querySelector('#input-email');
const theHouse = document.querySelector('#house');

// Funções para escrever no form
// Name
function name() {
  const addName = document.createElement('p');
  addName.innerHTML = `Nome: ${theName.value} ${theSurname.value}`;
  allText.appendChild(addName);
}

// Email
function email() {
  const addEmail = document.createElement('p');
  addEmail.innerHTML = `Email: ${theEmail.value}`;
  allText.appendChild(addEmail);
}

// House
function house() {
  const addHouse = document.createElement('p');
  addHouse.innerHTML = `Casa: ${theHouse.value}`;
  allText.appendChild(addHouse);
}
// Family
function family() {
  // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
  const theChosenFamily = document.querySelector('input[name="family"]:checked');
  const addtheFamily = document.createElement('p');
  addtheFamily.innerHTML = `Família: ${theChosenFamily.value}`;
  allText.appendChild(addtheFamily);
}

// Subjects
function subjects() {
  const checkedSubs = document.querySelectorAll('input[name="subs"]:checked');
  const array = [];
  let result = '';
  for (let index = 0; index < checkedSubs.length; index += 1) {
    array.push(checkedSubs[index].value);
  }
  result = array.join(', ');
  const addtheSubjects = document.createElement('p');
  addtheSubjects.innerHTML = `Matérias: ${result}`;
  allText.appendChild(addtheSubjects);
}

// Evaluation
function evaluation() {
  const theChosenRate = document.querySelector('input[name="rate"]:checked');
  const addTheRate = document.createElement('p');
  addTheRate.innerHTML = `Avaliação: ${theChosenRate.value}`;
  allText.appendChild(addTheRate);
}

// Observações
function observation() {
  const theComment = document.querySelector('#textarea');
  const addTheComment = document.createElement('p');
  addTheComment.innerHTML = `Observações: ${theComment.value}`;
  allText.appendChild(addTheComment);
}

submitFormButton.addEventListener('click', (e) => {
  // Evitar refresh quando aperta o enviar sem o button ser type=button
  // https://stackoverflow.com/questions/7803814/prevent-refresh-of-page-when-button-inside-form-clicked
  e.preventDefault();
  name();
  email();
  house();
  family();
  subjects();
  evaluation();
  observation();
});
