const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.

    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);

    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);

    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0] === 'object', true);
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[1] === 'object', true);

    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1], true);

    // str.endsWith("123");
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith("123"), true);
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith("123"), true);

  });
});
