const modalEntrarFun = document.querySelector("#modalLoginFun")
const btnEntrarFun = document.querySelector("#btn-entrarFun")
const btnFecharFun = document.querySelector("#btn-FecharLoginFun")
btnEntrarFun.onclick = function(){   
modalEntrarFun.showModal()
} 
btnFecharFun.onclick = function(){
modalEntrarFun.close()
}

