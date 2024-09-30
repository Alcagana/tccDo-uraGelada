const modalEntrar = document.querySelector("#modalLogin")
const btnEntrar = document.querySelector("#btn-entrar")
const btnFechar = document.querySelector("#btn-FecharLogin")

btnEntrar.onclick = function(){
    
    modalEntrar.showModal()
} 
btnFechar.onclick = function(){

    modalEntrar.close()

}
