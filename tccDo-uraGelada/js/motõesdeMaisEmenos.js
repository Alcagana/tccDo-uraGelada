var contador = document.querySelector('#qtd'); // #qtd virou uma variavel que agora pode ser manipulada

document.querySelector('#mais').addEventListener('click', 
  
  function(){//função anônima
  var numero = parseInt(contador.textContent) + 1; //saiu de string para um número inteiro e adciona quando clicado
  contador.textContent = numero; 
});

document.querySelector('#menos').addEventListener('click',
  
  function(){ 
  var numero = parseInt(contador.textContent) - 1;
  contador.textContent = numero; 


});


