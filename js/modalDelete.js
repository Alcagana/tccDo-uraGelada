const modalDelete = document.querySelector("#modalDelete")
const btnAcessarModal = document.querySelector("#deletarFuncionario")
const btnFecharModalDelete = document.querySelector("#FecharModal")
btnAcessarModal.onclick = function(){
modalDelete.showModal()
}
btnFecharModalDelete.onclick = function(){   
modalDelete.close()
}
