precos = {

    CocaCola: 6,
    Fanta: 4.49,
    Sprit: 5.80,
  
  }
  
  //Refrigerante CocaCola
  const contador = document.querySelector('#qtd1');
  const btnMais = document.querySelector('#btn1mais')
  const btnMenos = document.querySelector('#btn1menos')
  const textoPagar = document.querySelector('#total1') 
  
  btnMais.addEventListener('click',addProduto)
  btnMenos.addEventListener('click', removeProduto)
  
  function cocaCola(){  
    
    let quantidade = contador.textContent
    const total = Number(quantidade) * Number(precos.CocaCola) 
    textoPagar.textContent = total
  }
  
  function addProduto(){
    const numero = parseInt(contador.textContent) + 1 ;
    contador.textContent = numero ;  
    cocaCola()
  }
  
  function removeProduto(){
  
    if( contador.textContent >= 1){
      let numero = parseInt(contador.textContent) - 1 ;
      contador.textContent = numero
      cocaCola()
     
    } else{
      contador.textContent = 0
      
  
    }
  
  }

  //Refrigerante Fanta
  const contador2 = document.querySelector('#qtd2');
  const btnMais2 = document.querySelector('#btn2mais')
  const btnMenos2 = document.querySelector('#btn2menos')
  const textoPagar2 = document.querySelector('#total2') 
  
  btnMais2.addEventListener('click',addProduto2)
  btnMenos2.addEventListener('click', removeProduto2)
  
  function Fanta(){  
    
    let quantidade2 = contador2.textContent
    const total2 = Number(quantidade2) * Number(precos.Fanta) 
    textoPagar2.textContent = total2
  }
  
  function addProduto2 (){
    const numero2 = parseInt(contador2.textContent) + 1 ;
    contador2.textContent = numero2 ;  
    Fanta()
    
  }
  
  function removeProduto2 (){
  
    if( contador2.textContent >= 1){
      let numero2 = parseInt(contador2.textContent) - 1 ;
      contador2.textContent = numero2
      Fanta()
     
    } else{
      contador2.textContent = 0
      
  
    }
  
  }

  //Refrigerante Sprit
  const contador3 = document.querySelector('#qtd3');
  const btnMais3 = document.querySelector('#btn3mais')
  const btnMenos3 = document.querySelector('#btn3menos')
  const textoPagar3 = document.querySelector('#total3') 
  
  btnMais3.addEventListener('click',addProduto3)
  btnMenos3.addEventListener('click', removeProduto3)
  
  function Sprit(){  
    
    let quantidade3 = contador3.textContent
    const total3 = Number(quantidade3) * Number(precos.Sprit) 
    textoPagar3.textContent = total3
  }
  
  function addProduto3 (){
    const numero3 = parseInt(contador3.textContent) + 1 ;
    contador3.textContent = numero3;  
    Sprit()
    
  }
  
  function removeProduto3 (){
  
    if( contador3.textContent >= 1){
      let numero3 = parseInt(contador3.textContent) - 1 ;
      contador3.textContent = numero3
      Sprit()
     
    } else{
      contador3.textContent = 0
      
  
    }
  
  }

  