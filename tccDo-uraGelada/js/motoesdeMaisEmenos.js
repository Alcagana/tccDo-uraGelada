const contador = document.querySelector('#qtd1');
const btnMais = document.querySelector('#btn1mais')
const btnMenos = document.querySelector('#btn1menos')



const textoPagar = document.querySelector('#total') 
const qtd = contador.textContent

precos = {

  casquinha: 2.50,
  MilkShake: 10,
  sunday: 6.50,

}

function textoCasquinha(){
     
  const pagarCasquinha = qtd * precos.casquinha
  textoCasquinha = pagarCasquinha
  console.log(textoCasquinha.textContent)
}






btnMais.addEventListener('click',addProduto)
btnMenos.addEventListener('click', removeProduto)


function addProduto (){
  const numero = parseInt(contador.textContent) + 1 ;
  contador.textContent = numero ;  
  
}

function removeProduto (){

  if( contador.textContent >= 1){
    var numero = parseInt(contador.textContent) - 1 ;
    contador.textContent = numero
   
  } else{
    contador.textContent = 0
    

  }

}




