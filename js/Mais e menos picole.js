PIprecos = {

    picoleChocolate: 3,
    picoleLimão: 2.51,
    picoleMorango: 2.52,
    picoleCoco: 2.53,
    picoleManga: 2.54,
    picoleFuVe: 2.55,
    picoleMelancia: 2.56,
    picoleAbacaxi: 2.57,  
  }
  
  //BOTÃO PICOLÉ-CHOCOLATE
  const contador = document.querySelector('#PIqtd1');
  const btnMais = document.querySelector('#PIbtn1mais')
  const btnMenos = document.querySelector('#PIbtn1menos')
  const textoPagar = document.querySelector('#PItotal1') 
  
  btnMais.addEventListener('click',addProduto)
  btnMenos.addEventListener('click', removeProduto)
  
  function picoleChocolate(){  
    
    let quantidade = contador.textContent
    const total = Number(quantidade) * Number(precos.picoleChocolate) 
    textoPagar.textContent = total
  }
  
  function addProduto (){
    const numero = parseInt(contador.textContent) + 1 ;
    contador.textContent = numero ;  
    picoleChocolate()
    
  }
  
  function removeProduto (){
  
    if( contador.textContent >= 1){
      let numero = parseInt(contador.textContent) - 1 ;
      contador.textContent = numero
      picoleChocolate()
     
    } else{
      contador.textContent = 0
      
  
    }
  
  }

  //BOTÃO PICOLÉ-LIMÃO
  const contador2 = document.querySelector('#PIqtd2');
  const btnMais2 = document.querySelector('#PIbtn2mais')
  const btnMenos2 = document.querySelector('#PIbtn2menos')
  const textoPagar2 = document.querySelector('#PItotal2') 
  
  btnMais2.addEventListener('click',addProduto2)
  btnMenos2.addEventListener('click', removeProduto2)
  
  function picoleLimao(){  
    
    let quantidade2 = contador2.textContent
    const total2 = Number(quantidade2) * Number(precos.picoleLimão) 
    textoPagar2.textContent = total2
  }
  
  function addProduto2 (){
    const numero2 = parseInt(contador2.textContent) + 1 ;
    contador2.textContent = numero2;  
    picoleLimao()
    
  }
  
  function removeProduto2 (){
  
    if( contador2.textContent >= 1){
      let numero2 = parseInt(contador2.textContent) - 1 ;
      contador2.textContent = numero2
      picoleLimao()
     
    } else{
      contador2.textContent = 0
      
  
    }
  
  }

  //BOTÃO PICOLÉ-MORANGOPI
  const contador3 = document.querySelector('#PIqtd3');
  const btnMais3 = document.querySelector('#PIbtn3mais')
  const btnMenos3 = document.querySelector('#PIbtn3menos')
  const textoPagar3 = document.querySelector('#PItotal3') 
  
  btnMais3.addEventListener('click',addProduto3)
  btnMenos3.addEventListener('click', removeProduto3)
  
  function picoleMorango(){  
    
    let quantidade3 = contador3.textContent
    const total3 = Number(quantidade3) * Number(precos.picoleMorango) 
    textoPagar3.textContent = total3
  }
  
  function addProduto3 (){
    const numero3 = parseInt(contador3.textContent) + 1 ;
    contador3.textContent = numero3 ;  
    picoleMorango()
    
  }
  
  function removeProduto3 (){
  
    if( contador3.textContent >= 1){
      let numero3 = parseInt(contador3.textContent) - 1 ;
      contador3.textContent = numero3
      picoleMorango()
     
    } else{
      contador3.textContent = 0
      
  
    }
  
  }
  //BOTÃO PICOLÉ-COCO
  const contador4 = document.querySelector('#PIPIqtd4');
  const btnMais4 = document.querySelector('#PIbtn4mais')
  const btnMenos4 = document.querySelector('#PIbtn4menos')
  const textoPagar4 = document.querySelector('#PItotal4') 
  
  btnMais4.addEventListener('click',addProduto4)
  btnMenos4.addEventListener('click', removeProduto4)
  
  function picoleCoco(){  
    
    let quantidade4 = contador4.textContent
    const total4 = Number(quantidade4) * Number(precos.picoleCoco) 
    textoPagar4.textContent = total4
  }
  
  function addProduto4 (){
    const numero4 = parseInt(contador4.textContent) + 1 ;
    contador4.textContent = numero4;  
    picoleCoco()
    
  }
  
  function removeProduto4 (){
  
    if( contador4.textContent >= 1){
      let numero4 = parseInt(contador4.textContent) - 1 ;
      contador4.textContent = numero4
      picoleCoco()
     
    } else{
      contador4.textContent = 0
      
  
    }
  
  }

  //BOTÃO PICOLÉ-MANGA
  const contador5 = document.querySelector('#PIqtd5');
  const btnMais5 = document.querySelector('#PIbtn5mais')
  const btnMenos5 = document.querySelector('#PIbtn5menos')
  const textoPagar5 = document.querySelector('#PItotal5') 
  
  btnMais5.addEventListener('click',addProduto5)
  btnMenos5.addEventListener('click', removeProduto5)
  
  function picoleManga(){  
    
    let quantidade5 = contador5.textContent
    const total5 = Number(quantidade5) * Number(precos.picoleManga) 
    textoPagar5.textContent = total5
  }
  
  function addProduto5 (){
    const numero5 = parseInt(contador5.textContent) + 1 ;
    contador5.textContent = numero5;  
    picoleManga()
    
  }
  
  function removeProduto5 (){
  
    if( contador5.textContent >= 1){
      let numero5 = parseInt(contador5.textContent) - 1 ;
      contador5.textContent = numero5
      picoleManga()
     
    } else{
      contador5.textContent = 0
      
  
    }
  
  }

   //BOTÃO PICOLÉ-FRUTAS VERMELHAS
   const contador6 = document.querySelector('#PIqtd6');
   const btnMais6 = document.querySelector('#PIbtn6mais')
   const btnMenos6 = document.querySelector('#PIbtn6menos')
   const textoPagar6 = document.querySelector('#PItotal6') 
   
   btnMais6.addEventListener('click',addProduto6)
   btnMenos6.addEventListener('click', removeProduto6)
   
   function picoleFuVe(){  
     
     let quantidade6 = contador6.textContent
     const total6 = Number(quantidade6) * Number(precos.picoleFuVe) 
     textoPagar6.textContent = total6
   }
   
   function addProduto6 (){
     const numero6 = parseInt(contador6.textContent) + 1 ;
     contador6.textContent = numero6;  
     picoleFuVe()
     
   }
   
   function removeProduto6 (){
   
     if( contador6.textContent >= 1){
       let numero6 = parseInt(contador6.textContent) - 1 ;
       contador6.textContent = numero6
       picoleFuVe()
      
     } else{
       contador6.textContent = 0
       
   
     }
   
   }
PI
    //BOTÃO PICOLÉ-Melancia
    const contador7 = document.querySelector('#PIqtd7');
    const btnMais7 = document.querySelector('#PIbtn7mais')
    const btnMenos7 = document.querySelector('#PIbtn7menos')
    const textoPagar7 = document.querySelector('#PItotal7') 
    
    btnMais7.addEventListener('click',addProduto7)
    btnMenos7.addEventListener('click', removeProduto7)
    
    function picoleMelancia(){  
      
      let quantidade7 = contador7.textContent
      const total7 = Number(quantidade7) * Number(precos.picoleMelancia) 
      textoPagar7.textContent = total7
    }
    
    function addProduto7 (){
      const numero7 = parseInt(contador7.textContent) + 1 ;
      contador7.textContent = numero7;  
      picoleMelancia()
      
    }
    
    function removeProduto7(){
    
      if(contador7.textContent >= 1){
        let numero7 = parseInt(contador7.textContent) - 1 ;
        contador7.textContent = numero7
        picoleMelancia()
       
      } else{
        contador7.textContent = 0
      }
    
    }

    //BOTÃO PICOLÉ-Abacaxi
    const contador8 = document.querySelector('#PIqtd8');
    const btnMais8 = document.querySelector('#PIbtn8mais')
    const btnMenos8 = document.querySelector('#PIbtn8menos')
    const textoPagar8 = document.querySelector('#PItotal8') 
    
    btnMais8.addEventListener('click',addProduto8)
    btnMenos8.addEventListener('click', removeProduto8)
    
    function picoleAbacaxi(){  
      
      let quantidade8 = contador8.textContent
      const total8 = Number(quantidade8) * Number(precos.picoleAbacaxi) 
      textoPagar8.textContent = total8
    }
    
    function addProduto8(){
      const numero8 = parseInt(contador8.textContent) + 1 ;
      contador8.textContent = numero8;  
      picoleAbacaxi()
      
    }
    
    function removeProduto8(){
    
      if(contador8.textContent >= 1){
        let numero8 = parseInt(contador8.textContent) - 1 ;
        contador8.textContent = numero8
        picoleAbacaxi()
       
      } else{
        contador8.textContent = 0
      }
    
    }
  