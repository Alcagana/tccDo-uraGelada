const contador = document.querySelector('#qtd1');
const btnMais = document.querySelector('#btn1mais')
const btnMenos = document.querySelector('#btn1menos')
const textoPagar = document.querySelector('#total') 

precos = {

  casquinha: 2.50,
  MilkShake: 10,
  sunday: 6.50,

}

function textoCasquinha(){
     
  let quantidade = contador.textContent
  const total = quantidade * precos.casquinha
  console.log(total)

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




