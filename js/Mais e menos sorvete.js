precos = {

  casquinha: 3.00,
  cascão: 4.50,
  MilkShake: 10,
  bananaSplit: 20,
  sundaeKids: 5,
  sundaeEspecial: 6,
  cupuacu: 10,
  Acai: 10,

}

//BOTÃO CASQUINHA
const contador = document.querySelector('#qtd1');
const btnMais = document.querySelector('#btn1mais')
const btnMenos = document.querySelector('#btn1menos')
const textoPagar = document.querySelector('#total1') 

btnMais.addEventListener('click',addProduto)
btnMenos.addEventListener('click', removeProduto)

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


//BOTÃO CASCÃO
const contador2 = document.querySelector('#qtd2');
const btnMais2 = document.querySelector('#btn2mais')
const btnMenos2 = document.querySelector('#btn2menos')
const textoPagar2 = document.querySelector('#total2') 

btnMais2.addEventListener('click',addProduto2)
btnMenos2.addEventListener('click', removeProduto2)

function ContaCascao(){  
  
  let quantidade2 = contador2.textContent
  const total2 = Number(quantidade2) * Number(precos.cascão) 
  textoPagar2.textContent = total2
}

function addProduto2 (){
  const numero2 = parseInt(contador2.textContent) + 1 ;
  contador2.textContent = numero2 ;  
  ContaCascao()
}

function removeProduto2 (){

  if( contador2.textContent >= 1){
    let numero2 = parseInt(contador2.textContent) - 1 ;
    contador2.textContent = numero2
    ContaCascao() 
  } else{
    contador2.textContent = 0
    

  }

}

//BOTÃO MILK-SHAKE
const contador3 = document.querySelector('#qtd3');
const btnMais3 = document.querySelector('#btn3mais')
const btnMenos3 = document.querySelector('#btn3menos')
const textoPagar3 = document.querySelector('#total3') 

btnMais3.addEventListener('click',addProduto3)
btnMenos3.addEventListener('click', removeProduto3)

function ContaMilkShake(){  
  
  let quantidade3 = contador2.textContent
  const total3 = Number(quantidade3) * Number(precos.MilkShake) 
  textoPagar3.textContent = total3
}

function addProduto3 (){
  const numero3 = parseInt(contador3.textContent) + 1 ;
  contador3.textContent = numero3 ;  
  ContaMilkShake()
  
}

function removeProduto3 (){

  if( contador3.textContent >= 1){
    let numero3 = parseInt(contador3.textContent) - 1 ;
    contador3.textContent = numero3
   ContaMilkShake()
   
  } else{
    contador3.textContent = 0
    

  }

}

//BOTÃO BANANA-SPLIT
const contador4 = document.querySelector('#qtd4');
const btnMais4 = document.querySelector('#btn4mais')
const btnMenos4 = document.querySelector('#btn4menos')
const textoPagar4 = document.querySelector('#total4') 

btnMais4.addEventListener('click',addProduto4)
btnMenos4.addEventListener('click', removeProduto4)

function ContaBanana(){  
  
  let quantidade4 = contador4.textContent
  const total4 = Number(quantidade4) * Number(precos.bananaSplit) 
  textoPagar4.textContent = total4
}

function addProduto4(){
  const numero4 = parseInt(contador4.textContent) + 1 ;
  contador4.textContent = numero4 ;  
  ContaBanana()
  
}

function removeProduto4(){

  if( contador4.textContent >= 1){
    let numero4 = parseInt(contador4.textContent) - 1 ;
    contador4.textContent = numero4
    ContaBanana()
  } else{
    contador4.textContent = 0
    

  }

}

//BOTÃO SUNDADE-KIDS
const contador5 = document.querySelector('#qtd5');
const btnMais5 = document.querySelector('#btn5mais')
const btnMenos5 = document.querySelector('#btn5menos')
const textoPagar5 = document.querySelector('#total5') 

btnMais5.addEventListener('click',addProduto5)
btnMenos5.addEventListener('click', removeProduto5)

function SundaeKids(){  
  
  let quantidade5 = contador5.textContent
  const total5 = Number(quantidade5) * Number(precos.sundaeKids) 
  textoPagar5.textContent = total5
}

function addProduto5(){
  const numero5 = parseInt(contador5.textContent) + 1 ;
  contador5.textContent = numero5 ;  
  SundaeKids()
  
}

function removeProduto5(){

  if( contador5.textContent >= 1){
    let numero5 = parseInt(contador5.textContent) - 1 ;
    contador5.textContent = numero5
    SundaeKids()
  } else{
    contador5.textContent = 0
    

  }

}

//BOTÃO SUNDADE-ESPECIAL
const contador6 = document.querySelector('#qtd6');
const btnMais6 = document.querySelector('#btn6mais')
const btnMenos6 = document.querySelector('#btn6menos')
const textoPagar6 = document.querySelector('#total6') 

btnMais6.addEventListener('click',addProduto6)
btnMenos6.addEventListener('click', removeProduto6)

function sundaeEspecial(){  
  
  let quantidade6 = contador6.textContent
  const total6 = Number(quantidade6) * Number(precos.sundaeEspecial) 
  textoPagar6.textContent = total6
}

function addProduto6(){
  const numero6 = parseInt(contador6.textContent) + 1 ;
  contador6.textContent = numero6 ;  
  sundaeEspecial()
  
}

function removeProduto6(){

  if( contador6.textContent >= 1){
    let numero6 = parseInt(contador6.textContent) - 1 ;
    contador6.textContent = numero6
    sundaeEspecial()
  } else{
    contador6.textContent = 0
    

  }

}
//BOTÃO CUPUAÇU
const contador7 = document.querySelector('#qtd7');
const btnMais7 = document.querySelector('#btn7mais')
const btnMenos7 = document.querySelector('#btn7menos')
const textoPagar7 = document.querySelector('#total7') 

btnMais7.addEventListener('click',addProduto7)
btnMenos7.addEventListener('click', removeProduto7)

function cupuacu(){  
  
  let quantidade7 = contador7.textContent
  const total7 = Number(quantidade7) * Number(precos.cupuacu) 
  textoPagar7.textContent = total7
}

function addProduto7(){
  const numero7 = parseInt(contador7.textContent) + 1 ;
  contador7.textContent = numero7 ;  
  cupuacu()
  
}

function removeProduto7(){

  if( contador7.textContent >= 1){
    let numero7 = parseInt(contador7.textContent) - 1 ;
    contador7.textContent = numero7
    cupuacu()
  } else{
    contador7.textContent = 0
    

  }

}
//BOTÃO AÇAÍ
const contador8 = document.querySelector('#qtd8');
const btnMais8 = document.querySelector('#btn8mais')
const btnMenos8 = document.querySelector('#btn8menos')
const textoPagar8 = document.querySelector('#total8') 

btnMais8.addEventListener('click',addProduto8)
btnMenos8.addEventListener('click', removeProduto8)

function Acai(){  
  
  let quantidade8 = contador8.textContent
  const total8 = Number(quantidade8) * Number(precos.Acai) 
  textoPagar8.textContent = total8
}

function addProduto8(){
  const numero8 = parseInt(contador8.textContent) + 1 ;
  contador8.textContent = numero8 ;  
  Acai()
  
}

function removeProduto8(){

  if( contador8.textContent >= 1){
    let numero8 = parseInt(contador8.textContent) - 1 ;
    contador8.textContent = numero8
    Acai()
  } else{
    contador8.textContent = 0
    

  }

}
