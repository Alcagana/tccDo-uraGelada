const modalAjuda = document.querySelector("#modalAjuda")
const btnAjudaAcessar = document.querySelector("#btn-ajuda")
const btnFecharModalAjuda = document.querySelector("#btn-FecharModalAjuda")
btnAjudaAcessar.onclick = function(){
modalAjuda.showModal()
}
btnFecharModalAjuda.onclick = function(){   
modalAjuda.close()
}
