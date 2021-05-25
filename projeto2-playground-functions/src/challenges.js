// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(nomes) {
  return [nomes[nomes.length - 1], nomes[0]].join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
      count = 1;
    } else if (array[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function categoryFizzBuzz(number) {
  let result = 0;
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = categoryFizzBuzz(array[index]);
  }
  return array;
}

// Desafio 9
function encode(sentence) {
  let replacement = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newSentence = '';
  for (let letter of sentence) {
    if (replacement[letter]) {
      newSentence += (replacement[letter]);
    } else {
      newSentence += (letter);
    }
  }
  return newSentence;
}

function decode(sentence) {
  let replacement = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newSentence = '';
  for (let letter of sentence) {
    if (replacement[letter]) {
      newSentence += (replacement[letter]);
    } else {
      newSentence += (letter);
    }
  }
  return newSentence;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
