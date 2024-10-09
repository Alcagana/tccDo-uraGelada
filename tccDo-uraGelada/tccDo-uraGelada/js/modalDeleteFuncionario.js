const modal = document.querySelector("#modalDelete")
const abrirModal = document.querySelector("#abrirModal")
const fecharModal = document.querySelector("#FecharModal")

abrirModal.onclick = function(){
    
    modal.showModal()
} 
fecharModal.onclick = function(){

    modal.close()

}
