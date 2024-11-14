precos = {

  chicletes: 0.5,
  balas: 0.25,
  agua: 2.5,
  monster: 12,
  kuat: 5,
  fanta: 5.5,
  cocaCola: 6,
  }
  
//CHICLETE BLONG
const contador1 = document.querySelector('#qtd1');
const btnMais1 = document.querySelector('#btn1mais')
const btnMenos1 = document.querySelector('#btn1menos')
const textoPagar1 = document.querySelector('#total1') 

btnMais1.addEventListener('click',addProduto1)
btnMenos1.addEventListener('click', removeProduto1)

function ChicleteBlong(){  
  
  let quantidade1 = contador1.textContent
  const total1 = Number(quantidade1) * Number(precos.chicletes) 
  textoPagar1.textContent = total1
}

function addProduto1 (){
  const numero1 = parseInt(contador1.textContent) + 1 ;
  contador1.textContent = numero1;  
  ChicleteBlong()
  
}

function removeProduto1 (){

  if( contador1.textContent >= 1){
    let numero1 = parseInt(contador1.textContent) - 1 ;
    contador1.textContent = numero1
    ChicleteBlong()
   
  } else{
    contador1.textContent = 0
    

  }

}

  //BALA 7BELO
  const contador2 = document.querySelector('#qtd2');
  const btnMais2 = document.querySelector('#btn2mais')
  const btnMenos2 = document.querySelector('#btn2menos')
  const textoPagar2 = document.querySelector('#total2') 
  
  btnMais2.addEventListener('click',addProduto2)
  btnMenos2.addEventListener('click', removeProduto2)
  
  function BalaBelo(){  
    
    let quantidade2 = contador2.textContent
    const total2 = Number(quantidade2) * Number(precos.balas) 
    textoPagar2.textContent = total2
  }
  
  function addProduto2 (){
    const numero2 = parseInt(contador2.textContent) + 1 ;
    contador2.textContent = numero2;  
    BalaBelo()
    
  }
  
  function removeProduto2 (){
  
    if( contador2.textContent >= 1){
      let numero2 = parseInt(contador2.textContent) - 1 ;
      contador2.textContent = numero2
      BalaBelo()
     
    } else{
      contador2.textContent = 0
      
  
    }
  
  }
  
  //BALA YOGURTE
  const contador3 = document.querySelector('#qtd3');
  const btnMais3 = document.querySelector('#btn3mais')
  const btnMenos3 = document.querySelector('#btn3menos')
  const textoPagar3 = document.querySelector('#total3') 
  
  btnMais3.addEventListener('click',addProduto3)
  btnMenos3.addEventListener('click', removeProduto3)
  
  function BalaYogurte(){  
    
    let quantidade3 = contador3.textContent
    const total3 = Number(quantidade3) * Number(precos.balas) 
    textoPagar3.textContent = total3
  }
  
  function addProduto3 (){
    const numero3 = parseInt(contador3.textContent) + 1 ;
    contador3.textContent = numero3;  
    BalaYogurte()
    
  }
  
  function removeProduto3 (){
  
    if( contador3.textContent >= 1){
      let numero3 = parseInt(contador3.textContent) - 1 ;
      contador3.textContent = numero3
      BalaYogurte()
     
    } else{
      contador3.textContent = 0
      
  
    }
  
  }

  //BEBIDA-ÁGUA
  const contador4 = document.querySelector('#qtd4');
  const btnMais4 = document.querySelector('#btn4mais')
  const btnMenos4 = document.querySelector('#btn4menos')
  const textoPagar4 = document.querySelector('#total4') 
  
  btnMais4.addEventListener('click',addProduto4)
  btnMenos4.addEventListener('click', removeProduto4)
  
  function agua(){  
    
    let quantidade4 = contador4.textContent
    const total4 = Number(quantidade4) * Number(precos.agua) 
    textoPagar4.textContent = total4
  }
  
  function addProduto4 (){
    const numero4 = parseInt(contador4.textContent) + 1 ;
    contador4.textContent = numero4;  
    agua()
    
  }
  
  function removeProduto4 (){
  
    if( contador4.textContent >= 1){
      let numero4 = parseInt(contador4.textContent) - 1 ;
      contador4.textContent = numero4
      agua()
     
    } else{
      contador4.textContent = 0
    }
  
  }

//BEBIDA-MONSTER
const contador5 = document.querySelector('#qtd5');
const btnMais5 = document.querySelector('#btn5mais')
const btnMenos5 = document.querySelector('#btn5menos')
const textoPagar5 = document.querySelector('#total5') 

btnMais5.addEventListener('click',addProduto5)
btnMenos5.addEventListener('click', removeProduto5)

function monster(){  
  
  let quantidade5 = contador5.textContent
  const total5 = Number(quantidade5) * Number(precos.monster) 
  textoPagar5.textContent = total5
}

function addProduto5 (){
  const numero5 = parseInt(contador5.textContent) + 1 ;
  contador5.textContent = numero5;  
  monster()
  
}

function removeProduto5 (){

  if( contador5.textContent >= 1){
    let numero5 = parseInt(contador5.textContent) - 1 ;
    contador5.textContent = numero5
    monster()
   
  } else{
    contador5.textContent = 0
    

  }

}
  

  //BEBIDA-KUAT
  const contador6 = document.querySelector('#qtd6');
  const btnMais6 = document.querySelector('#btn6mais')
  const btnMenos6 = document.querySelector('#btn6menos')
  const textoPagar6 = document.querySelector('#total6') 
  
  btnMais6.addEventListener('click',addProduto6)
  btnMenos6.addEventListener('click', removeProduto6)
  
  function kuat(){  
    
    let quantidade6 = contador6.textContent
    const total6 = Number(quantidade6) * Number(precos.kuat) 
    textoPagar6.textContent = total6
  }
  
  function addProduto6 (){
    const numero6 = parseInt(contador6.textContent) + 1 ;
    contador6.textContent = numero6;  
    kuat()
    
  }
  
  function removeProduto6 (){
  
    if( contador6.textContent >= 1){
      let numero6 = parseInt(contador6.textContent) - 1 ;
      contador6.textContent = numero6
      kuat()
     
    } else{
      contador6.textContent = 0
      
  
    }
  
  }
  //BEBIDA-FANTA
  const contador7 = document.querySelector('#qtd7');
  const btnMais7 = document.querySelector('#btn7mais')
  const btnMenos7 = document.querySelector('#btn7menos')
  const textoPagar7 = document.querySelector('#total7') 
  
  btnMais7.addEventListener('click',addProduto7)
  btnMenos7.addEventListener('click', removeProduto7)
  
  function Fanta(){  
    
    let quantidade7 = contador7.textContent
    const total7 = Number(quantidade7) * Number(precos.fanta) 
    textoPagar7.textContent = total7
  }
  
  function addProduto7 (){
    const numero7 = parseInt(contador7.textContent) + 1 ;
    contador7.textContent = numero7 ;  
    Fanta()
    
  }
  
  function removeProduto7 (){
  
    if( contador7.textContent >= 1){
      let numero7 = parseInt(contador7.textContent) - 1 ;
      contador7.textContent = numero7
      Fanta()
     
    } else{
      contador7.textContent = 0
      
  
    }
  
  }

  //BEBIDA-COCACOLA
  const contador8 = document.querySelector('#qtd8');
  const btnMais8 = document.querySelector('#btn8mais')
  const btnMenos8 = document.querySelector('#btn8menos')
  const textoPagar8 = document.querySelector('#total8') 
  
  btnMais8.addEventListener('click',addProduto8)
  btnMenos8.addEventListener('click', removeProduto8)
  
  function cocaCola(){  
    
    let quantidade8 = contador8.textContent
    const total8 = Number(quantidade8) * Number(precos.cocaCola) 
    textoPagar8.textContent = total8
  }
  
  function addProduto8(){
    const numero8 = parseInt(contador8.textContent) + 1 ;
    contador8.textContent = numero8;  
    cocaCola()
  }
  
  function removeProduto8(){
  
    if( contador8.textContent >= 1){
      let numero8 = parseInt(contador8.textContent) - 1 ;
      contador8.textContent = numero8
      cocaCola()
     
    } else{
      contador8.textContent = 0
      
  
    }
  
  }
  