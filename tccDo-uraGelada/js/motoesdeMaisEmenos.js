var contador = document.querySelector('#qtd1');

document.querySelector('#btn++1').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});

document.querySelector('#btn--1').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) - 1;
  contador.textContent = numero;
});

