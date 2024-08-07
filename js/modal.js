const modal = document.querySelector("#ajuda")
const btnFecharModal = document.querySelector("#fechar")
const btnAjuda = document.querySelector("#btn-ajuda")


btnAjuda.onclick = function(){
    modal.showModal()
}

btnFecharModal.onclick = function(){
    modal.close()
}