const btn = document.querySelector("#link-btnCadastrar")

    btn.disabled = true; // Desativa o botão

    // Desativa o link ao impedir o evento de clique
    document.querySelector("#link-btnCadastrar").addEventListener('click', function(event) {
        event.preventDefault();
    });













    // Verifica se o Firebase foi inicializado corretamente
firebase.auth().onAuthStateChanged(function(usuario) {
    if (usuario) { // Usuário está logado
       
        const usuarioEmail = usuario.email;
        
        // Lista de emails permitidos (por exemplo, admin@empresa.com)
        const emailPermitido = "cleidetejano1504@gmail.com";
        
        const btn = document.querySelector("#btn-cadaFun");
        
        if (usuarioEmail === emailPermitido) { // Habilitar o botão se o e-mail for o permitido
           
            btn.disabled = false;
            btn.removeEventListener('click', desativarLink); // Remover evento de desativação do clique

        } else { // Desabilitar o botão e prevenir o clique para funcionários
           
            btn.disabled = true;
            btn.addEventListener('click', desativarLink); // Adicionar o evento para desativar o clique
        }
    } 
});

function desativarLink(event) {
    event.preventDefault();
    console.log("Ação não permitida para esse usuário.");
}
