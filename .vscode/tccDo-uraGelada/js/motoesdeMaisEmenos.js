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
  const total =Number(quantidade) * Number(precos.casquinha) 
  console.log(total)

}


textoCasquinha()

btnMais.addEventListener('click',addProduto)
btnMenos.addEventListener('click', removeProduto)


function addProduto (){
  const numero = parseInt(contador.textContent) + 1 ;
  contador.textContent = numero ;  
  textoCasquinha()
  
}

function removeProduto (){

  if( contador.textContent >= 1){
    var numero = parseInt(contador.textContent) - 1 ;
    contador.textContent = numero
   
  } else{
    contador.textContent = 0
    

  }

}




