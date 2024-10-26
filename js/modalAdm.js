const modalEntrarAdm = document.querySelector("#modalLoginAdm")
const btnEntrarAdm = document.querySelector("#btn-entrarAdm")
const btnFecharAdm = document.querySelector("#btn-FecharLoginAdm")

btnEntrarAdm.onclick = function(){
    
    modalEntrarAdm.showModal()
} 
btnFecharAdm.onclick = function(){

    modalEntrarAdm.close()

}


