// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!';
  }

  let result = [];
  list = list.sort();
  for (let technology of list) {
    result.push({
      tech: technology,
      name: `${name}`,
    });
  }
  return result;
}

// Desafio 11
function length(array) {
  return (array.length === 11);
}

function check0to9(array) {
  let situation = true;
  for (let index = 0; index < 11; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      situation = false;
    }
  }
  return situation;
}

function checkConsecutive(array) {
  const sorted = [...array].sort();
  let situation = true;
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] === sorted[index + 1] && (sorted[index] === sorted[index + 2])) {
      situation = false;
    }
  }
  return situation;
}

function finalCheck(array) {
  if (length(array) === false) {
    return 'Array com tamanho incorreto.';
  } if (check0to9(array) === false || checkConsecutive(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

function thePhoneNumber(array) {
  let phoneNumber = `(${array[0]}${array[1]}) `;
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += array[index];
  }
  phoneNumber += '-';
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += array[index];
  }
  return phoneNumber;
}

function generatePhoneNumber(array) {
  if (finalCheck(array) === true) {
    return thePhoneNumber(array);
  }
  return finalCheck(array);
}

// Desafio 12
function sumSide(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC) {
    return false;
  }
  if (lineC > lineA + lineB) {
    return false;
  }
  return true;
}

function diffSide(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineB)) {
    return true;
  }
  if (lineC > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  return (sumSide(lineA, lineB, lineC) && diffSide(lineA, lineB, lineC));
}

// Desafio 13
function hydrate(string) {
  let reduction = /\d+/g;
  let quantity = string.match(reduction).map(Number);
  let count = 0;
  for (let index of quantity) {
    count += index;
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}

// Referências
// https://www.freecodecamp.org/news/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f/
// https://stackoverflow.com/questions/30607419/return-only-numbers-from-string

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
