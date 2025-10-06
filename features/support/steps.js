const {Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { somar, subtrair } = require('./calculadora');

let numeros;
let resultado;

Given('eu tenho os números {int} e {int}', function(num1, num2) {
    numeros = [num1, num2];
});

When('eu somo esses números', function() {
    resultado = somar(numeros[0], numeros[1])
});

When('eu subtraio esses numeros', function() {
    resultado = subtrair(numeros[0], numeros[1])
});

Then('o resultado deve ser {int}', function(resultadoEsperado){
    expect(resultado).to.equal(resultadoEsperado);
});

