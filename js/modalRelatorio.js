const modal = document.querySelector("#modal-fechar")
const btnEntrar = document.querySelector("#btn-fecharRe")
const btnFechar = document.querySelector("#btn-fechar")
btnEntrar.onclick = function(){   
modal.showModal()
} 
btnFechar.onclick = function(){
modal.close()
}

