

const btn = document.querySelector("#link-btnCadastrar")

    btn.disabled = true; // Desativa o botão

    // Desativa o link ao impedir o evento de clique
    document.querySelector("#link-btnCadastrar").addEventListener('click', function(event) {
        event.preventDefault();
    });