const contador = document.querySelector('#qtd1');
const btnMais = document.querySelector('#btn1mais')
const btnMenos = document.querySelector('#btn1menos')
const textoPagar = document.querySelector('#total1') 

btnMais.addEventListener('click',addProduto)
btnMenos.addEventListener('click', removeProduto)


precos = {

  casquinha: 2.50,
  MilkShake: 10,
  bananaSplit: 20,

}

function ContaCasquinha(){  
  
  let quantidade = contador.textContent
  const total = Number(quantidade) * Number(precos.casquinha) 
  textoPagar.textContent = total
}

function addProduto (){
  const numero = parseInt(contador.textContent) + 1 ;
  contador.textContent = numero ;  
  ContaCasquinha()
  
}

function removeProduto (){

  if( contador.textContent >= 1){
    let numero = parseInt(contador.textContent) - 1 ;
    contador.textContent = numero
    ContaCasquinha()
   
  } else{
    contador.textContent = 0
    

  }

}


//BOTÃO MILK-SHAKE
const contador2 = document.querySelector('#qtd2');
const btnMais2 = document.querySelector('#btn2mais')
const btnMenos2 = document.querySelector('#btn2menos')
const textoPagar2 = document.querySelector('#total2') 

btnMais2.addEventListener('click',addProduto2)
btnMenos2.addEventListener('click', removeProduto2)

function ContaMilkShake(){  
  
  let quantidade2 = contador2.textContent
  const total2 = Number(quantidade2) * Number(precos.MilkShake) 
  textoPagar2.textContent = total2
}

function addProduto2 (){
  const numero2 = parseInt(contador2.textContent) + 1 ;
  contador2.textContent = numero2 ;  
  ContaMilkShake()
  
}

function removeProduto2 (){

  if( contador2.textContent >= 1){
    let numero2 = parseInt(contador2.textContent) - 1 ;
    contador2.textContent = numero2
   ContaMilkShake()
   
  } else{
    contador2.textContent = 0
    

  }

}

//BOTÃO BANANA-SPLIT
const contador3 = document.querySelector('#qtd3');
const btnMais3 = document.querySelector('#btn3mais')
const btnMenos3 = document.querySelector('#btn3menos')
const textoPagar3 = document.querySelector('#total3') 

btnMais3.addEventListener('click',addProduto3)
btnMenos3.addEventListener('click', removeProduto3)

function ContaBanana(){  
  
  let quantidade3 = contador3.textContent
  const total3 = Number(quantidade3) * Number(precos.bananaSplit) 
  textoPagar3.textContent = total3
}

function addProduto3 (){
  const numero3 = parseInt(contador3.textContent) + 1 ;
  contador3.textContent = numero3 ;  
  ContaBanana()
  
}

function removeProduto3 (){

  if( contador3.textContent >= 1){
    let numero3 = parseInt(contador3.textContent) - 1 ;
    contador3.textContent = numero3
    ContaBanana()
  } else{
    contador3.textContent = 0
    

  }

}
