precos = {

  casquinha: 3.00,
  cascão: 4.50,
  MilkShake: 10,
  bananaSplit: 20,
  sundaeKids: 5,
  sundaeEspecial: 6,
  cupuacu: 10,
  Acai: 10,

  picoleChocolate: 3,
  picoleLimão: 2.51,
  picoleMorango: 2.52,
  picoleCoco: 2.53,
  picoleManga: 2.54,
  picoleFuVe: 2.55,
  picoleMelancia: 2.56,
  picoleAbacaxi: 2.57,  

  chicletes: 0.5,
  balas: 0.25,
  agua: 2.5,
  monster: 12,
  kuat: 5,
  fanta: 5.5,
  cocaCola: 6,
}

//BOTÃO CASQUINHA
const SORcontador = document.querySelector('#qtd1');
const SORbtnMais = document.querySelector('#btn1mais')
const SORbtnMenos = document.querySelector('#btn1menos')
const SORtextoPagar = document.querySelector('#total1') 

SORbtnMais.addEventListener('click',addProduto)
SORbtnMenos.addEventListener('click', removeProduto)

function ContaCasquinha(){  
  
  let quantidade = SORcontador.textContent
  const total = Number(quantidade) * Number(precos.casquinha) 
  SORtextoPagar.textContent = total
}

function addProduto (){
  const numero = parseInt(SORcontador.textContent) + 1 ;
  SORcontador.textContent = numero ;  
  ContaCasquinha()
  
}

function removeProduto (){

  if( SORcontador.textContent >= 1){
    let numero = parseInt(SORcontador.textContent) - 1 ;
    SORcontador.textContent = numero
    ContaCasquinha()
   
  } else{
    SORcontador.textContent = 0
    

  }

}


//BOTÃO CASCÃO
const SORcontador2 = document.querySelector('#qtd2');
const SORbtnMais2 = document.querySelector('#btn2mais')
const SORbtnMenos2 = document.querySelector('#btn2menos')
const SORtextoPagar2 = document.querySelector('#total2') 

SORbtnMais2.addEventListener('click',addProduto2)
SORbtnMenos2.addEventListener('click', removeProduto2)

function ContaCascao(){  
  
  let quantidade2 = SORcontador2.textContent
  const total2 = Number(quantidade2) * Number(precos.cascão) 
  SORtextoPagar2.textContent = total2
}

function addProduto2 (){
  const numero2 = parseInt(SORcontador2.textContent) + 1 ;
  SORcontador2.textContent = numero2 ;  
  ContaCascao()
}

function removeProduto2 (){

  if( SORcontador2.textContent >= 1){
    let numero2 = parseInt(SORcontador2.textContent) - 1 ;
    SORcontador2.textContent = numero2
    ContaCascao() 
  } else{
    SORcontador2.textContent = 0
    

  }

}

//BOTÃO MILK-SHAKE
const SORcontador3 = document.querySelector('#qtd3');
const SORbtnMais3 = document.querySelector('#btn3mais')
const SORbtnMenos3 = document.querySelector('#btn3menos')
const SORtextoPagar3 = document.querySelector('#total3') 

SORbtnMais3.addEventListener('click',addProduto3)
SORbtnMenos3.addEventListener('click', removeProduto3)

function ContaMilkShake(){  
  
  let quantidade3 = SORcontador2.textContent
  const total3 = Number(quantidade3) * Number(precos.MilkShake) 
  SORtextoPagar3.textContent = total3
}

function addProduto3 (){
  const numero3 = parseInt(SORcontador3.textContent) + 1 ;
  SORcontador3.textContent = numero3 ;  
  ContaMilkShake()
  
}

function removeProduto3 (){

  if( SORcontador3.textContent >= 1){
    let numero3 = parseInt(SORcontador3.textContent) - 1 ;
    SORcontador3.textContent = numero3
   ContaMilkShake()
   
  } else{
    SORcontador3.textContent = 0
    

  }

}

//BOTÃO BANANA-SPLIT
const SORcontador4 = document.querySelector('#qtd4');
const SORbtnMais4 = document.querySelector('#btn4mais')
const SORbtnMenos4 = document.querySelector('#btn4menos')
const SORtextoPagar4 = document.querySelector('#total4') 

SORbtnMais4.addEventListener('click',addProduto4)
SORbtnMenos4.addEventListener('click', removeProduto4)

function ContaBanana(){  
  
  let quantidade4 = SORcontador4.textContent
  const total4 = Number(quantidade4) * Number(precos.bananaSplit) 
  SORtextoPagar4.textContent = total4
}

function addProduto4(){
  const numero4 = parseInt(SORcontador4.textContent) + 1 ;
  SORcontador4.textContent = numero4 ;  
  ContaBanana()
  
}

function removeProduto4(){

  if( SORcontador4.textContent >= 1){
    let numero4 = parseInt(SORcontador4.textContent) - 1 ;
    SORcontador4.textContent = numero4
    ContaBanana()
  } else{
    SORcontador4.textContent = 0
    

  }

}

//BOTÃO SUNDADE-KIDS
const SORcontador5 = document.querySelector('#qtd5');
const SORbtnMais5 = document.querySelector('#btn5mais')
const SORbtnMenos5 = document.querySelector('#btn5menos')
const SORtextoPagar5 = document.querySelector('#total5') 

SORbtnMais5.addEventListener('click',addProduto5)
SORbtnMenos5.addEventListener('click', removeProduto5)

function SundaeKids(){  
  
  let quantidade5 = SORcontador5.textContent
  const total5 = Number(quantidade5) * Number(precos.sundaeKids) 
  SORtextoPagar5.textContent = total5
}

function addProduto5(){
  const numero5 = parseInt(SORcontador5.textContent) + 1 ;
  SORcontador5.textContent = numero5 ;  
  SundaeKids()
  
}

function removeProduto5(){

  if( SORcontador5.textContent >= 1){
    let numero5 = parseInt(SORcontador5.textContent) - 1 ;
    SORcontador5.textContent = numero5
    SundaeKids()
  } else{
    SORcontador5.textContent = 0
    

  }

}

//BOTÃO SUNDADE-ESPECIAL
const SORcontador6 = document.querySelector('#qtd6');
const SORbtnMais6 = document.querySelector('#btn6mais')
const SORbtnMenos6 = document.querySelector('#btn6menos')
const SORtextoPagar6 = document.querySelector('#total6') 

SORbtnMais6.addEventListener('click',addProduto6)
SORbtnMenos6.addEventListener('click', removeProduto6)

function sundaeEspecial(){  
  
  let quantidade6 = SORcontador6.textContent
  const total6 = Number(quantidade6) * Number(precos.sundaeEspecial) 
  SORtextoPagar6.textContent = total6
}

function addProduto6(){
  const numero6 = parseInt(SORcontador6.textContent) + 1 ;
  SORcontador6.textContent = numero6 ;  
  sundaeEspecial()
  
}

function removeProduto6(){

  if( SORcontador6.textContent >= 1){
    let numero6 = parseInt(SORcontador6.textContent) - 1 ;
    SORcontador6.textContent = numero6
    sundaeEspecial()
  } else{
    SORcontador6.textContent = 0
    

  }

}
//BOTÃO CUPUAÇU
const SORcontador7 = document.querySelector('#qtd7');
const SORbtnMais7 = document.querySelector('#btn7mais')
const SORbtnMenos7 = document.querySelector('#btn7menos')
const SORtextoPagar7 = document.querySelector('#total7') 

SORbtnMais7.addEventListener('click',addProduto7)
SORbtnMenos7.addEventListener('click', removeProduto7)

function cupuacu(){  
  
  let quantidade7 = SORcontador7.textContent
  const total7 = Number(quantidade7) * Number(precos.cupuacu) 
  SORtextoPagar7.textContent = total7
}

function addProduto7(){
  const numero7 = parseInt(SORcontador7.textContent) + 1 ;
  SORcontador7.textContent = numero7 ;  
  cupuacu()
  
}

function removeProduto7(){

  if( SORcontador7.textContent >= 1){
    let numero7 = parseInt(SORcontador7.textContent) - 1 ;
    SORcontador7.textContent = numero7
    cupuacu()
  } else{
    SORcontador7.textContent = 0
    

  }

}
//BOTÃO AÇAÍ
const SORcontador8 = document.querySelector('#qtd8');
const SORbtnMais8 = document.querySelector('#btn8mais')
const SORbtnMenos8 = document.querySelector('#btn8menos')
const SORtextoPagar8 = document.querySelector('#total8') 

SORbtnMais8.addEventListener('click',addProduto8)
SORbtnMenos8.addEventListener('click', removeProduto8)

function Acai(){  
  
  let quantidade8 = SORcontador8.textContent
  const total8 = Number(quantidade8) * Number(precos.Acai) 
  SORtextoPagar8.textContent = total8
}

function addProduto8(){
  const numero8 = parseInt(SORcontador8.textContent) + 1 ;
  SORcontador8.textContent = numero8 ;  
  Acai()
  
}

function removeProduto8(){

  if( SORcontador8.textContent >= 1){
    let numero8 = parseInt(SORcontador8.textContent) - 1 ;
    SORcontador8.textContent = numero8
    Acai()
  } else{
    SORcontador8.textContent = 0
    

  }

}



/*PICOLÉS*/

  
  //BOTÃO PICOLÉ-CHOCOLATE
  const PIcontador = document.querySelector('#PIqtd1');
  const PIbtnMais = document.querySelector('#PIbtn1mais')
  const PIbtnMenos = document.querySelector('#PIbtn1menos')
  const PItextoPagar = document.querySelector('#PItotal1') 
  
  PIbtnMais.addEventListener('click',PIaddProduto)
  PIbtnMenos.addEventListener('click', PIremoveProduto)
  
  function picoleChocolate(){  
    
    let quantidade = PIcontador.textContent
    const total = Number(quantidade) * Number(precos.picoleChocolate) 
    PItextoPagar.textContent = total
  }
  
  function PIaddProduto (){
    const numero = parseInt(PIcontador.textContent) + 1 ;
    PIcontador.textContent = numero ;  
    picoleChocolate()
    
  }
  
  function PIremoveProduto (){
  
    if( PIcontador.textContent >= 1){
      let numero = parseInt(PIcontador.textContent) - 1 ;
      PIcontador.textContent = numero
      picoleChocolate()
     
    } else{
      PIcontador.textContent = 0
      
  
    }
  
  }

  //BOTÃO PICOLÉ-LIMÃO
  const PIcontador2 = document.querySelector('#PIqtd2');
  const PIbtnMais2 = document.querySelector('#PIbtn2mais')
  const PIbtnMenos2 = document.querySelector('#PIbtn2menos')
  const PItextoPagar2 = document.querySelector('#PItotal2') 
  
  PIbtnMais2.addEventListener('click',PIaddProduto2)
  PIbtnMenos2.addEventListener('click', PIremoveProduto2)
  
  function picoleLimao(){  
    
    let quantidade2 = PIcontador2.textContent
    const total2 = Number(quantidade2) * Number(precos.picoleLimão) 
    PItextoPagar2.textContent = total2
  }
  
  function PIaddProduto2 (){
    const numero2 = parseInt(PIcontador2.textContent) + 1 ;
    PIcontador2.textContent = numero2;  
    picoleLimao()
    
  }
  
  function PIremoveProduto2 (){
  
    if( PIcontador2.textContent >= 1){
      let numero2 = parseInt(PIcontador2.textContent) - 1 ;
      PIcontador2.textContent = numero2
      picoleLimao()
     
    } else{
      PIcontador2.textContent = 0
      
  
    }
  
  }

  //BOTÃO PICOLÉ-MORANGO
  const PIcontador3 = document.querySelector('#PIqtd3');
  const PIbtnMais3 = document.querySelector('#PIbtn3mais')
  const PIbtnMenos3 = document.querySelector('#PIbtn3menos')
  const PItextoPagar3 = document.querySelector('#PItotal3') 
  
  PIbtnMais3.addEventListener('click',PIaddProduto3)
  PIbtnMenos3.addEventListener('click', PIremoveProduto3)
  
  function picoleMorango(){  
    
    let quantidade3 = PIcontador3.textContent
    const total3 = Number(quantidade3) * Number(precos.picoleMorango) 
    PItextoPagar3.textContent = total3
  }
  
  function PIaddProduto3 (){
    const numero3 = parseInt(PIcontador3.textContent) + 1 ;
    PIcontador3.textContent = numero3 ;  
    picoleMorango()
    
  }
  
  function PIremoveProduto3 (){
  
    if( PIcontador3.textContent >= 1){
      let numero3 = parseInt(PIcontador3.textContent) - 1 ;
      PIcontador3.textContent = numero3
      picoleMorango()
     
    } else{
      PIcontador3.textContent = 0
      
  
    }
  
  }
  //BOTÃO PICOLÉ-COCO
  const PIcontador4 = document.querySelector('#PIqtd4');
  const PIbtnMais4 = document.querySelector('#PIbtn4mais')
  const PIbtnMenos4 = document.querySelector('#PIbtn4menos')
  const PItextoPagar4 = document.querySelector('#PItotal4') 
  
  PIbtnMais4.addEventListener('click',PIaddProduto4)
  PIbtnMenos4.addEventListener('click', PIremoveProduto4)
  
  function picoleCoco(){  
    
    let quantidade4 = PIcontador4.textContent
    const total4 = Number(quantidade4) * Number(precos.picoleCoco) 
    PItextoPagar4.textContent = total4
  }
  
  function PIaddProduto4 (){
    const numero4 = parseInt(PIcontador4.textContent) + 1 ;
    PIcontador4.textContent = numero4;  
    picoleCoco()
    
  }
  
  function PIremoveProduto4 (){
  
    if( PIcontador4.textContent >= 1){
      let numero4 = parseInt(PIcontador4.textContent) - 1 ;
      PIcontador4.textContent = numero4
      picoleCoco()
     
    } else{
      PIcontador4.textContent = 0
      
  
    }
  
  }

  //BOTÃO PICOLÉ-MANGA
  const PIcontador5 = document.querySelector('#PIqtd5');
  const PIbtnMais5 = document.querySelector('#PIbtn5mais')
  const PIbtnMenos5 = document.querySelector('#PIbtn5menos')
  const PItextoPagar5 = document.querySelector('#PItotal5') 
  
  PIbtnMais5.addEventListener('click',PIaddProduto5)
  PIbtnMenos5.addEventListener('click', PIremoveProduto5)
  
  function picoleManga(){  
    
    let quantidade5 = PIcontador5.textContent
    const total5 = Number(quantidade5) * Number(precos.picoleManga) 
    PItextoPagar5.textContent = total5
  }
  
  function PIaddProduto5 (){
    const numero5 = parseInt(PIcontador5.textContent) + 1 ;
    PIcontador5.textContent = numero5;  
    picoleManga()
    
  }
  
  function PIremoveProduto5 (){
  
    if( PIcontador5.textContent >= 1){
      let numero5 = parseInt(PIcontador5.textContent) - 1 ;
      PIcontador5.textContent = numero5
      picoleManga()
     
    } else{
      PIcontador5.textContent = 0
      
  
    }
  
  }

   //BOTÃO PICOLÉ-FRUTAS VERMELHAS
   const PIcontador6 = document.querySelector('#PIqtd6');
   const PIbtnMais6 = document.querySelector('#PIbtn6mais')
   const PIbtnMenos6 = document.querySelector('#PIbtn6menos')
   const PItextoPagar6 = document.querySelector('#PItotal6') 
   
   PIbtnMais6.addEventListener('click',PIaddProduto6)
   PIbtnMenos6.addEventListener('click', PIremoveProduto6)
   
   function picoleFuVe(){  
     
     let quantidade6 = PIcontador6.textContent
     const total6 = Number(quantidade6) * Number(precos.picoleFuVe) 
     PItextoPagar6.textContent = total6
   }
   
   function PIaddProduto6 (){
     const numero6 = parseInt(PIcontador6.textContent) + 1 ;
     PIcontador6.textContent = numero6;  
     picoleFuVe()
     
   }
   
   function PIremoveProduto6 (){
   
     if( PIcontador6.textContent >= 1){
       let numero6 = parseInt(PIcontador6.textContent) - 1 ;
       PIcontador6.textContent = numero6
       picoleFuVe()
      
     } else{
       PIcontador6.textContent = 0
       
   
     }
   
   }

    //BOTÃO PICOLÉ-Melancia
    const PIcontador7 = document.querySelector('#PIqtd7');
    const PIbtnMais7 = document.querySelector('#PIbtn7mais')
    const PIbtnMenos7 = document.querySelector('#PIbtn7menos')
    const PItextoPagar7 = document.querySelector('#PItotal7') 
    
    PIbtnMais7.addEventListener('click',PIaddProduto7)
    PIbtnMenos7.addEventListener('click', PIremoveProduto7)
    
    function picoleMelancia(){  
      
      let quantidade7 = PIcontador7.textContent
      const total7 = Number(quantidade7) * Number(precos.picoleMelancia) 
      PItextoPagar7.textContent = total7
    }
    
    function PIaddProduto7 (){
      const numero7 = parseInt(PIcontador7.textContent) + 1 ;
      PIcontador7.textContent = numero7;  
      picoleMelancia()
      
    }
    
    function PIremoveProduto7(){
    
      if(PIcontador7.textContent >= 1){
        let numero7 = parseInt(PIcontador7.textContent) - 1 ;
        PIcontador7.textContent = numero7
        picoleMelancia()
       
      } else{
        PIcontador7.textContent = 0
      }
    
    }

    //BOTÃO PICOLÉ-Abacaxi
    const PIcontador8 = document.querySelector('#PIqtd8');
    const PIbtnMais8 = document.querySelector('#PIbtn8mais')
    const PIbtnMenos8 = document.querySelector('#PIbtn8menos')
    const PItextoPagar8 = document.querySelector('#PItotal8') 
    
    PIbtnMais8.addEventListener('click',PIaddProduto8)
    PIbtnMenos8.addEventListener('click', PIremoveProduto8)
    
    function picoleAbacaxi(){  
      
      let quantidade8 = PIcontador8.textContent
      const total8 = Number(quantidade8) * Number(precos.picoleAbacaxi) 
      PItextoPagar8.textContent = total8
    }
    
    function PIaddProduto8(){
      const numero8 = parseInt(PIcontador8.textContent) + 1 ;
      PIcontador8.textContent = numero8;  
      picoleAbacaxi()
      
    }
    
    function PIremoveProduto8(){
    
      if(PIcontador8.textContent >= 1){
        let numero8 = parseInt(PIcontador8.textContent) - 1 ;
        PIcontador8.textContent = numero8
        picoleAbacaxi()
       
      } else{
        PIcontador8.textContent = 0
      }
    
    }
  







/*ADICIONAIS*/



//CHICLETE BLONG
const ADcontador1 = document.querySelector('#ADqtd1');
const ADbtnMais1 = document.querySelector('#ADbtn1mais')
const ADbtnMenos1 = document.querySelector('#ADbtn1menos')
const ADtextoPagar1 = document.querySelector('#ADtotal1') 

ADbtnMais1.addEventListener('click',ADaddProduto1)
ADbtnMenos1.addEventListener('click', ADremoveProduto1)

function ChicleteBlong(){  
  
  let quantidade1 = ADcontador1.textContent
  const total1 = Number(quantidade1) * Number(precos.chicletes) 
  ADtextoPagar1.textContent = total1
}

function ADaddProduto1 (){
  const numero1 = parseInt(ADcontador1.textContent) + 1 ;
  ADcontador1.textContent = numero1;  
  ChicleteBlong()
  
}

function ADremoveProduto1 (){

  if( ADcontador1.textContent >= 1){
    let numero1 = parseInt(ADcontador1.textContent) - 1 ;
    ADcontador1.textContent = numero1
    ChicleteBlong()
   
  } else{
    ADcontador1.textContent = 0
    

  }

}

  //BALA 7BELO
  const ADcontador2 = document.querySelector('#ADqtd2');
  const ADbtnMais2 = document.querySelector('#ADbtn2mais')
  const ADbtnMenos2 = document.querySelector('#ADbtn2menos')
  const ADtextoPagar2 = document.querySelector('#ADtotal2') 
  
  ADbtnMais2.addEventListener('click',ADaddProduto2)
  ADbtnMenos2.addEventListener('click', ADremoveProduto2)
  
  function BalaBelo(){  
    
    let quantidade2 = ADcontador2.textContent
    const total2 = Number(quantidade2) * Number(precos.balas) 
    ADtextoPagar2.textContent = total2
  }
  
  function ADaddProduto2 (){
    const numero2 = parseInt(ADcontador2.textContent) + 1 ;
    ADcontador2.textContent = numero2;  
    BalaBelo()
    
  }
  
  function ADremoveProduto2 (){
  
    if( ADcontador2.textContent >= 1){
      let numero2 = parseInt(ADcontador2.textContent) - 1 ;
      ADcontador2.textContent = numero2
      BalaBelo()
     
    } else{
      ADcontador2.textContent = 0
      
  
    }
  
  }
  
  //BALA YOGURTE
  const ADcontador3 = document.querySelector('#ADqtd3');
  const ADbtnMais3 = document.querySelector('#ADbtn3mais')
  const ADbtnMenos3 = document.querySelector('#ADbtn3menos')
  const ADtextoPagar3 = document.querySelector('#ADtotal3') 
  
  ADbtnMais3.addEventListener('click',ADaddProduto3)
  ADbtnMenos3.addEventListener('click', ADremoveProduto3)
  
  function BalaYogurte(){  
    
    let quantidade3 = ADcontador3.textContent
    const total3 = Number(quantidade3) * Number(precos.balas) 
    ADtextoPagar3.textContent = total3
  }
  
  function ADaddProduto3 (){
    const numero3 = parseInt(ADcontador3.textContent) + 1 ;
    ADcontador3.textContent = numero3;  
    BalaYogurte()
    
  }
  
  function ADremoveProduto3 (){
  
    if( ADcontador3.textContent >= 1){
      let numero3 = parseInt(ADcontador3.textContent) - 1 ;
      ADcontador3.textContent = numero3
      BalaYogurte()
     
    } else{
      ADcontador3.textContent = 0
      
  
    }
  
  }

  //BEBIDA-ÁGUA
  const ADcontador4 = document.querySelector('#ADqtd4');
  const ADbtnMais4 = document.querySelector('#ADbtn4mais')
  const ADbtnMenos4 = document.querySelector('#ADbtn4menos')
  const ADtextoPagar4 = document.querySelector('#ADtotal4') 
  
  ADbtnMais4.addEventListener('click',ADaddProduto4)
  ADbtnMenos4.addEventListener('click', ADremoveProduto4)
  
  function agua(){  
    
    let quantidade4 = ADcontador4.textContent
    const total4 = Number(quantidade4) * Number(precos.agua) 
    ADtextoPagar4.textContent = total4
  }
  
  function ADaddProduto4 (){
    const numero4 = parseInt(ADcontador4.textContent) + 1 ;
    ADcontador4.textContent = numero4;  
    agua()
    
  }
  
  function ADremoveProduto4 (){
  
    if( ADcontador4.textContent >= 1){
      let numero4 = parseInt(ADcontador4.textContent) - 1 ;
      ADcontador4.textContent = numero4
      agua()
     
    } else{
      ADcontador4.textContent = 0
    }
  
  }

//BEBIDA-MONSTER
const ADcontador5 = document.querySelector('#ADqtd5');
const ADbtnMais5 = document.querySelector('#ADbtn5mais')
const ADbtnMenos5 = document.querySelector('#ADbtn5menos')
const ADtextoPagar5 = document.querySelector('#ADtotal5') 

ADbtnMais5.addEventListener('click',ADaddProduto5)
ADbtnMenos5.addEventListener('click', ADremoveProduto5)

function monster(){  
  
  let quantidade5 = ADcontador5.textContent
  const total5 = Number(quantidade5) * Number(precos.monster) 
  ADtextoPagar5.textContent = total5
}

function ADaddProduto5 (){
  const numero5 = parseInt(ADcontador5.textContent) + 1 ;
  ADcontador5.textContent = numero5;  
  monster()
  
}

function ADremoveProduto5 (){

  if( ADcontador5.textContent >= 1){
    let numero5 = parseInt(ADcontador5.textContent) - 1 ;
    ADcontador5.textContent = numero5
    monster()
   
  } else{
    ADcontador5.textContent = 0
    

  }

}
  

  //BEBIDA-KUAT
  const ADcontador6 = document.querySelector('#ADqtd6');
  const ADbtnMais6 = document.querySelector('#ADbtn6mais')
  const ADbtnMenos6 = document.querySelector('#ADbtn6menos')
  const ADtextoPagar6 = document.querySelector('#ADtotal6') 
  
  ADbtnMais6.addEventListener('click',ADaddProduto6)
  ADbtnMenos6.addEventListener('click', ADremoveProduto6)
  
  function kuat(){  
    
    let quantidade6 = ADcontador6.textContent
    const total6 = Number(quantidade6) * Number(precos.kuat) 
    ADtextoPagar6.textContent = total6
  }
  
  function ADaddProduto6 (){
    const numero6 = parseInt(ADcontador6.textContent) + 1 ;
    ADcontador6.textContent = numero6;  
    kuat()
    
  }
  
  function ADremoveProduto6 (){
  
    if( ADcontador6.textContent >= 1){
      let numero6 = parseInt(ADcontador6.textContent) - 1 ;
      ADcontador6.textContent = numero6
      kuat()
     
    } else{
      ADcontador6.textContent = 0
      
  
    }
  
  }
  //BEBIDA-FANTA
  const ADcontador7 = document.querySelector('#ADqtd7');
  const ADbtnMais7 = document.querySelector('#ADbtn7mais')
  const ADbtnMenos7 = document.querySelector('#ADbtn7menos')
  const ADtextoPagar7 = document.querySelector('#ADtotal7') 
  
  ADbtnMais7.addEventListener('click',ADaddProduto7)
  ADbtnMenos7.addEventListener('click', ADremoveProduto7)
  
  function Fanta(){  
    
    let quantidade7 = ADcontador7.textContent
    const total7 = Number(quantidade7) * Number(precos.fanta) 
    ADtextoPagar7.textContent = total7
  }
  
  function ADaddProduto7 (){
    const numero7 = parseInt(ADcontador7.textContent) + 1 ;
    ADcontador7.textContent = numero7 ;  
    Fanta()
    
  }
  
  function ADremoveProduto7 (){
  
    if( ADcontador7.textContent >= 1){
      let numero7 = parseInt(ADcontador7.textContent) - 1 ;
      ADcontador7.textContent = numero7
      Fanta()
     
    } else{
      ADcontador7.textContent = 0
      
  
    }
  
  }

  //BEBIDA-COCACOLA
  const ADcontador8 = document.querySelector('#ADqtd8');
  const ADbtnMais8 = document.querySelector('#ADbtn8mais')
  const ADbtnMenos8 = document.querySelector('#ADbtn8menos')
  const ADtextoPagar8 = document.querySelector('#ADtotal8') 
  
  ADbtnMais8.addEventListener('click',ADaddProduto8)
  ADbtnMenos8.addEventListener('click', ADremoveProduto8)
  
  function cocaCola(){  
    
    let quantidade8 = ADcontador8.textContent
    const total8 = Number(quantidade8) * Number(precos.cocaCola) 
    ADtextoPagar8.textContent = total8
  }
  
  function ADaddProduto8(){
    const numero8 = parseInt(ADcontador8.textContent) + 1 ;
    ADcontador8.textContent = numero8;  
    cocaCola()
  }
  
  function ADremoveProduto8(){
  
    if( ADcontador8.textContent >= 1){
      let numero8 = parseInt(ADcontador8.textContent) - 1 ;
      ADcontador8.textContent = numero8
      cocaCola()
     
    } else{
      ADcontador8.textContent = 0
      
  
    }
  
  }
  