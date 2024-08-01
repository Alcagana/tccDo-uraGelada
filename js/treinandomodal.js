const AcessarModal = document.querySelector("#BtnModal");
const Voltar = document.querySelector("#BtnVoltar")
const Texto = document.querySelector("#Modalll")

AcessarModal.onclick = function(){

    Texto.showModal();
}

Voltar.onclick = function(){

    Texto.closet();
}

