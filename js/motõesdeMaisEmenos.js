var contador = document.querySelector('#qtd');

document.querySelector('#mais').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});

document.querySelector('#menos').addEventListener
('click', function(){
  var numero = parseInt(contador.textContent) - 1;
  contador.textContent = numero;
});